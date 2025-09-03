// Taget fra tidligere projekt

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import ActivitiesCard from "../activities-card";
import '../../app/(routes)/searchpage/search.scss'

const API_URL = "http://localhost:4000/api/v1/activities/";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchActivities = async () => {
      if (searchQuery.trim() === "") {
        setSearchResults([]);
        return;
      }

      try {
        const res = await fetch(API_URL);
        if (!res.ok) return;
        const data = await res.json();

        const filtered = data.filter((activity) =>
          activity.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSearchResults(filtered);
      } catch {
        setSearchResults([]);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchActivities();
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleActivityClick = (id) => {
    router.push(`/activitiespage/${id}`);
  };

  return (
    <>

      <div className="search-container">
        <div className="search__wrapper"><h1>Søg</h1>
          <div className="search-container__searchbox">
            <input
              className="search-input"
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}/>
            <div className="search-bg">

              <IoSearch className="search-icon" />
            </div>
          </div>
          <div className="search-results">
            {searchResults.map((activity) => (
              <div
                key={activity.id}
                className="result-item"
                onClick={() => handleActivityClick(activity.id)}>
                <ActivitiesCard activities={activity} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
