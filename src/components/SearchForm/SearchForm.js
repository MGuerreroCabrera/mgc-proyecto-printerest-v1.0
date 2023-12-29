import { printHeader } from "../Header/Header";
import { printPhotos } from "../../../main";
import { printFooter } from "../Footer/Footer";
import "./SearchForm.css";

// * DESCRIPCIÓN: Componente que devuelve el buscador de la cabecera.

const appDiv = document.querySelector("#app");


export const SearchForm = () => {

    // Declaro div a devolver con el input y el button
    const divSearch = document.querySelector(".searchFormContainer");
    divSearch.className = "div-search-container";

    // Declaro elemento HTML input
    const inputHTML = document.createElement("input");
    inputHTML.id = "searchImput";
    
    // Declaro el elemento HTML button
    const buttonSearchHTML = document.createElement("button");
    buttonSearchHTML.className = "search-button";
    buttonSearchHTML.id = "searchButton";
    
    // Añado los elementos a un div header 
    divSearch.appendChild(inputHTML);
    divSearch.appendChild(buttonSearchHTML);

    buttonSearchHTML.addEventListener(("click"), () => {
        //1. Recoger el valor del campo de búsqueda
        const searchValue = document.querySelector("#searchImput").value;
        // 2. Limpiar el div #app
        const appDiv = document.querySelector("#app");
        appDiv.innerHTML = ``;
        printPhotos(searchValue);
        // 3. Pintar el footer
        const footerHTML = printFooter();
        appDiv.appendChild(footerHTML);
    });

    return divSearch;

}