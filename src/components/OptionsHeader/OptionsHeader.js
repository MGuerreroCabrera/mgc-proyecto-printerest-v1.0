import "./OptionsHeader.css";

// * DESCRIPCIÓN: Componente que devuelve los elementos de la derecha de la cabecera.
// * Se devuelven en formato lista. 

// Objeto con las url de las imágenes y los alt
const imgData = [
    {
        url: "../../../public/bell-icon.png",
        alt: "icono avisos"
    },
    {
        url: "../../../public/dialog-icon.png",
        alt: "icono chat"
    },
    {
        url: "../../../public/usuario.png",
        alt: "icono perfil usuario"
    }
];

export const OptionsHeader = () => {

    // Crear elemento HTML lista
    const ulHTML = document.createElement("ul");
    ulHTML.className = "icons-list-header";
    // Crear los elementos de la lista

    // Recoger las urls del array de datos de las imágenes
    const urls = imgData.map((img) => {
        return img.url;
    } );

    // Recoger los alt del array de datos de las imágenes
    const alts = imgData.map((img) => {
        return img.alt;
    });

    // Crear los elementos HTML li con las imágenes. Deben incluir el src y el alt
    for(let i = 0; i < imgData.length; i++) {
        // Crear el li
        const liHTML = document.createElement("li");
        liHTML.className = "icons-list";
        // Crear la img
        const imgHTML = document.createElement("img");
        imgHTML.src = urls[i];
        imgHTML.alt = alts[i];
        // Inyectar la etiqueta img al li
        liHTML.appendChild(imgHTML);
        // Inyectar el li al ul
        ulHTML.appendChild(liHTML);
    }
    
    // Retornar el elemto HTML lista
    return ulHTML;
}