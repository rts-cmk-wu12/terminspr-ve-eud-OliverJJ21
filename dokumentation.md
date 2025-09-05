# Dokumentation for Landrup Dans Terminsprøve
Oliver Jensen, WU12


## Sådan kommer du i gang

`npm install`

`npm run dev`

## Tech-stack
* **Next.js**  
er et frontend framework baseret på React.js som blandt andet også giver adgang til serverside komponenter og actions samt mappebaseret routing. Serverside komponenter og funktioner giver en større sikkerhed fordi alt koden bliver afviklet på serveren fremfor i klienten.

* **Git**  
er et versionsstyringsværktøj som lader mig lave branches og versioner af min kode så jeg let ka gå tilbage til tidligere versioner hvis jeg for eksempel har lavet en fejl. Jeg bruger Git sammen med Github

* **React-icons**  
Er et library (bibliotek) som er beregnet på React. Det giver dig adgang til en masse forskellige ikoner og pakkeikoner nemt og hurtigt.

*	**Sass/Scss**  
Er en styling metode som minder om css men mere advanceret eller en udvidelse af css hvor man blandt andet kan lave funktioner, variabler, mixins og nesting. Man kan også opdele sin CSS i moduler og dermed kan man genbruge kode flere steder.

* **Zod**  
Et valideringsbibliotek til objekter og strings. Jeg bruger Zod i denne opgave til at validerer det brugeren skriver i mine formularer

## Kode-eksempel
CalendarCard komponent (components/calendar-card/index.jsx)
```jsx
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
```

Jeg starter med at kalde useState som er et react hook der retunere et array, det indeholder et state og en sætter funktion til staten. activities starter som en tom liste fordi jeg skal kunne gemme alle mine aktiviteter der. setActivities er en sætter til activities som jeg kan bruge til at ændre listen senere. Så bruger jeg useEffect til at hente de aktiviteter som er gemt i localStorage under "calendar" når komponenten loader første gang. Jeg bruger JSON.parse til at lave de gemte data om til et array og så opdaterer jeg activities med setActivities så min komponent har de rigtige data klar. Den tomme [] til sidst i useEffect betyder at koden kun kører en gang når det er komponenten starter.