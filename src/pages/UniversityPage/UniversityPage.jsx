import "./UniversityPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../../components/Banner/Banner";

export function UniversityPage() {
    const params = useParams();
    const id = params.id;

    const [university, setUniversity] = useState(undefined);

    async function getUniversity(id) {
        const response = await fetch(
            "https://programacioniii.vercel.app/api/v1/universidades/" + id
        );
        const data = await response.json();
        setUniversity(data);
    }

    useEffect(() => {
        getUniversity(id);
    }, [id]);

    return university ? (
        <>
            <Banner image={university.banner} />

            <section className="universitySection">
                <div className="container">
                    <img src={university.logo} alt="Logo" />

                    <div className="column">
                        <h1>{university.nombreCompleto}</h1>

                        <p>{university.descripcion}</p>

                        <a
                            href={university.web}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sitio web de la {university.nombre}
                        </a>
                    </div>
                </div>
            </section>
        </>
    ) : (
        <p>Cargando...</p>
    );
}
