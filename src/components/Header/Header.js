import { navMenu } from "../NavMenu/NavMenu";
import { OptionsHeader } from "../OptionsHeader/OptionsHeader";
import { SearchForm } from "../SearchForm/SearchForm";
import "./Header.css";

// Creamos la función que pinta el Header en el HTML incluyéndolo en el div #app
export const printHeader = () => {
    
    // Creo el elemento HTML header 
    const headerHTML = document.createElement("header");
    // Le asigno un id para seleccionar el elemento
    headerHTML.id = "appHeader";

    // Añadir logotipo
    const logoHTML = document.createElement("img");
    logoHTML.src = "./public/logo-phinterest.png";
    logoHTML.alt = "Logo phinterest";
    logoHTML.id = "logoPhinterest";
    headerHTML.appendChild(logoHTML);

    // Añadir menú de navegación
    headerHTML.appendChild(navMenu());

    // Añadir el buscador
    headerHTML.appendChild(SearchForm());

    // Añadir los elementos de la derecha
    headerHTML.appendChild(OptionsHeader());

    // Devolvemos el elemento Header
    return headerHTML;

}