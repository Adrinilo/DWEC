window.addEventListener("load", e=> {
    const publi1 = document.getElementById("acepta1");
    console.log(publi1);
    console.log(publi1.attributes);
    for(attrib of publi1.attributes) {
        console.log(attrib);
        console.log("Nombre", attrib.nodeName);
        console.log("Valor", attrib.nodeValue);
        console.log("Tipo", attrib.nodeType);
    }

    const valuePubli1 = publi1.getAttribute("type");
    console.log(valuePubli1);

    publi1.setAttribute("checked", 1)
    //equivale a
    //publi1.checked = 1;

    publi1.removeAttribute("checked");
})