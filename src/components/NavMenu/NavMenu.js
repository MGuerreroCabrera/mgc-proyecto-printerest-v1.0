import "./NavMenu.css";

// * DESCRIPCIÓN: Componente que devuelve el menú de navegación para incluirlo en la cabecera.

// Elementos de navegación
const navElements = ["Inicio", "Hoy", "Crear"];


export const navMenu = () => {

    // Crear elemento HTML lista
    const ulHTML = document.createElement("ul");
    ulHTML.id = "navMenu";
    // Crear los elementos de navegación
    for (const element of navElements) {
        const liHTML = document.createElement("li");
        liHTML.textContent = element;
        ulHTML.appendChild(liHTML);
    }
    // Retornar el elemto HTML lista
    return ulHTML;
}


