import "./AcademicOffer.css";
import { useEffect, useState } from "react";

export function AcademicOffer() {
    const [offers, setOffers] = useState(undefined);

    async function getOffers() {
        const response = await fetch(
            "https://programacioniii.vercel.app/api/v1/oferta-academica"
        );
        const data = await response.json();
        setOffers(data.ofertaAcademica);
    }

    useEffect(() => {
        getOffers();
    }, []);

    return (
        <section className="academicOffer">
            <div className="container">
                <h2>OFERTA ACADÉMICA</h2>

                <ul>
                    {offers ? (
                        offers.map((offer) => (
                            <li key={"AcademicOffer-" + offer.id}>
                                {offer.nombre}
                            </li>
                        ))
                    ) : (
                        <p>Cargando...</p>
                    )}
                </ul>
            </div>
        </section>
    );
}
