import Image from "next/image";
import '../activities.scss'
import DrawerMenu from "@/components/drawer-menu";
import SignupButton from "@/components/tilmeld-button";


export async function generateMetadata({ params }) {
    const { id } = await params;

    const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
    const json = await response.json();
    return {
        title: json.name
    }
}

export default async function ActivitiesPage({ params }) {
    const { id } = await params;

    const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
    const json = await response.json();

    
    return (
        <>
            <div className="activities-container">
                <article className="activities-container__details">
                    <Image src={json.asset.url} width={450} height={500} alt={json.id} priority />
                    <div className="activities-container__details-info">
                        <p className="activities-container__details-info__heading">{json.name}</p>
                        <span>{json.minAge}-{json.maxAge}</span>
                        <p>{json.description}</p>
                    </div>
                    <div className="activities-container__details__btn">
                        <SignupButton activity={json} />
                    </div>
                </article>
            </div>
            <DrawerMenu />
        </>
    );
}
