import "./AcademicOfferPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../../components/Banner/Banner";

export function AcademicOfferPage() {
    const params = useParams();
    const id = params.id;

    const [offer, setOffer] = useState(undefined);

    async function getOffer(id) {
        const response = await fetch(
            "https://programacioniii.vercel.app/api/v1/oferta-academica/" + id
        );
        const data = await response.json();
        setOffer(data);
    }

    useEffect(() => {
        getOffer(id);
    }, [id]);

    return offer ? (
        <>
            <Banner image={offer.banner} />

            <section className="offerSection">
                <div className="container">
                    <h3>{offer.universidad}</h3>

                    <hr />

                    <h1>{offer.nombre}</h1>
                    <p>{offer.descripcion}</p>
                </div>
            </section>
        </>
    ) : (
        <p>Cargando...</p>
    );
}
