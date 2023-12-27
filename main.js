import { printFooter } from './src/components/Footer/Footer';
import { printHeader } from './src/components/Header/Header';
import './style.css';

// Declaro la variable que será la capa #app donde irá el contenido del sitio.
const appDiv = document.querySelector("#app");

// Declaro la variable headerHTML para incluir el header en la aplicación
const headerHTML = printHeader();

// Inyecto el header en la aplicación
appDiv.appendChild(headerHTML);

// Función que pinta las imágenes por primera vez en la página.
export const printPhotos = async (searchFor) => {

    // Crear la sección main donde irá la galería de imágenes
    const mainHTML = document.createElement("main");
    mainHTML.className = "grid-container";
    mainHTML.id = "gallery-container";
    // Añadirla al DOM
    appDiv.appendChild(mainHTML);

    // creo las url de la API dependiendo de si me llega variable searchFor
    let urlFetch = "";
    if(!searchFor){
        urlFetch = `https://api.unsplash.com/photos/?per_page=30&client_id=CcBo6oYAVk3_KuVDKOzo-VRZhRcvBtqtaETJ0ws3tU4`;   
        try {
            const response = await fetch(urlFetch);        
            const resJSON = await response.json();
            for (const element of resJSON) {
                const altDescription = element.alt_description;
                const src = element.urls.small;
                const appDiv = document.querySelector("#app");
                const img = document.createElement("img");
                img.src = src;
                img.alt = altDescription;
                mainHTML.appendChild(img);
            }
        } catch (error) {
            console.log(error);
        }     
    }else{
        urlFetch = `https://api.unsplash.com/search/photos/?query=${searchFor}&per_page=30&client_id=CcBo6oYAVk3_KuVDKOzo-VRZhRcvBtqtaETJ0ws3tU4`;
        try {
            const response = await fetch(urlFetch);
            const resJSON = await response.json();
            for (const element of resJSON.results) {
                const altDescription = element.alt_description;
                const src = element.urls.small;
                const appDiv = document.querySelector("#app");
                const img = document.createElement("img");
                img.src = src;
                img.alt = altDescription;
                mainHTML.appendChild(img);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

// Llamada a la función que pinta las imágenes por primera vez.
printPhotos();

// Llamamos a la función que pinta el footer del componente Footer
const footerHTML = printFooter();

// Añado el footerHTML a la capa #app
appDiv.appendChild(footerHTML);

