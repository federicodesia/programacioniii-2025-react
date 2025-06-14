import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { UniversityPage } from "./pages/UniversityPage/UniversityPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { AcademicOfferPage } from "./pages/AcademicOfferPage/AcademicOfferPage";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ofertas/:id" element={<AcademicOfferPage />} />
                <Route path="/universidades/:id" element={<UniversityPage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
