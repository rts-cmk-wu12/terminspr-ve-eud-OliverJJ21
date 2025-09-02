import ActivitiesCard from "@/components/activities-card";
import './activities.scss'
import DrawerMenu from "@/components/drawer-menu";

export default async function Aktivitet() {
    const response = await fetch("http://localhost:4000/api/v1/activities");
    const json = await response.json();
    return (
        <>

            <div className="activity-container">
                <section className="activity-container__wrapper">
                    <h1>Aktiviteter</h1>
                    <ul>
                        {json.map(activities => (
                            <li key={activities.id}>
                                <ActivitiesCard activities={activities} />
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
            <DrawerMenu />
        </>
    );
}