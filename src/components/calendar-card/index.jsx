"use client";
import { useEffect, useState } from "react";
import '../../app/(routes)/calendarpage/calendar.scss'

export default function CalendarCard() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("calendar") || "[]");
        setActivities(stored);
    }, []);

    return (
        <div className="calendar-card">
            {activities.length === 0 ? (
                <p className="errormessage">Ingen aktiviteter tilmeldt endnu.</p>
            ) : (
                <div  className="calendar-card__info">
                    <ul>
                        {activities.map((act, activityData) => (
                            <li key={activityData}>
                                <h2>{act.title}</h2>
                                <div className="calendar-card__info-holder">
                                    <p className="weekday">{act.weekday}</p>
                                    <p className="time">{act.time}</p> 
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
}
