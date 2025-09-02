

import Image from "next/image";
import Link from "next/link";
import './activitycard.scss'

export default function ActivitiesCard({ activities }) {

    return (
        <>
            <Link href={`/activitiespage/${activities.id}`}>
                <article className="activitiescard">
                    <Image src={activities.asset.url} width={350} height={420} alt={activities.name}></Image>
                    <div className="activitiescard__info">
                        <p>{activities.name}</p>
                        <p>{activities.minAge} - {activities.maxAge}</p>
                    </div>
                </article>
            </Link>

        </>
    )
}

