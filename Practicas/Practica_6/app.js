window.addEventListener("DOMContentLoaded", () => {
    const template = document.getElementById("temp");
    const lista_tareas = document.getElementById("lista-tareas");
    const input = document.getElementById("input");
    const formulario = document.getElementById("formulario");


    formulario.addEventListener("submit", e => {
        e.preventDefault();
        const value = input.value.trim();
        if (value != "") {
            const div_tarea = document.importNode(template.content, true);
            const parrafo = div_tarea.querySelector("p");
            parrafo.textContent = value;
            const btn_check = div_tarea.querySelector(".fa-check-circle");
            const btn_delete = div_tarea.querySelector(".fa-times-circle");
            
            lista_tareas.appendChild(div_tarea);
        } else {
            input.placeholder = "Campo obligatorio: Introduzca una tarea";
        }
    });

    lista_tareas.addEventListener("click", e => {
        if (e.target.classList.contains("fa-check-circle")) {
            const div_tarea = e.target.closest(".alert");
            div_tarea.classList.remove("alert-warning");
            div_tarea.classList.add("alert-success");
        }
        if (e.target.classList.contains("fa-times-circle")) {
            const div_tarea = e.target.closest(".alert");
            div_tarea.classList.remove("alert-warning");
            div_tarea.classList.add("alert-danger");
        }
    });
});
