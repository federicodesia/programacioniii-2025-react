import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <img src="/images/Logo.png" alt="Logo CUCH" />
                </Link>

                <nav>
                    <Link to="/">CARRERAS</Link>
                    <Link to="/">UNIVERSIDADES</Link>
                    <Link to="/">INSTITUCIONAL</Link>
                    <Link to="/">NOTICIAS</Link>
                </nav>
            </div>
        </header>
    );
}
