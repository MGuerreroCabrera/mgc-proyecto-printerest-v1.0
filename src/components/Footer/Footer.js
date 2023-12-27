import "./Footer.css";

// Creamos la función que pinta el Footer en el HTML incluyéndolo en el div #app
export const printFooter = () => {
    
    // Creamos los elementos HTML footer y h3
    const footerHTML = document.createElement("footer");
    footerHTML.className = "flex-container";
    const h3HTML = document.createElement("h3");

    // Le ponemos texto al h3
    h3HTML.textContent = "Made with ❤️‍🔥 by Manuel Guerrero";
    
    // Añadimos el h3HTML al footerHTML
    footerHTML.appendChild(h3HTML);

    // Devolvemos el elemento Footer
    return footerHTML;

}


