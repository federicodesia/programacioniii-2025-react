import { AcademicOffer } from "../components/AcademicOffer/AcademicOffer";
import { Banner } from "../components/Banner/Banner";
import { DualBanner } from "../components/DualBanner/DualBanner";
import { Universities } from "../components/Universities/Universities";

export function HomePage() {
    return (
        <>
            <AcademicOffer />

            <Banner
                image="/images/Banner1.jpg"
                title="Comenzá tu camino universitario"
            />

            <Universities />

            <Banner image="/images/Banner2.jpg" title="Más de 15 años juntos" />

            <DualBanner
                image="/images/Banner3.jpg"
                title='"El conocimiento es el único bien que aumenta cuando se comparte" Aristóteles'
            />
        </>
    );
}
