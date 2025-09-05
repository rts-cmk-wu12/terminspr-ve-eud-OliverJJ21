"use client";

import { useEffect, useState } from "react";


export default function SignupButton({ activity }) {
    const [isSignedUp, setIsSignedUp] = useState(false);

    useEffect(() => {
        const existing = JSON.parse(localStorage.getItem("calendar") || "[]");
        const found = existing.some(SavedAct => SavedAct.id === activity.id);
        setIsSignedUp(found);
    }, [activity.id]);

    const handleSignup = () => {
        const existing = JSON.parse(localStorage.getItem("calendar") || "[]");

        if (!isSignedUp) {
            const activityData = {
                id: activity.id,
                title: activity.name,
                weekday: activity.weekday,
                time: activity.time
            };
            existing.push(activityData);
            localStorage.setItem("calendar", JSON.stringify(existing));
            setIsSignedUp(true);
        }
        else {
            const updated = existing.filter(SavedAct => SavedAct.id !== activity.id);
            localStorage.setItem("calendar", JSON.stringify(updated));
            setIsSignedUp(false);
        }
    };

    return (
        <button onClick={handleSignup}>
            {isSignedUp ? "Forlad" : "Tilmeld"}
        </button>
    )
}
