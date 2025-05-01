const btn = document.getElementById("btn");
const body = document.body;

const savedMode = localStorage.getItem("mode");

if (savedMode) {
    body.classList.add(savedMode);
} else {
    body.classList.add("fondo-claro"); 
}

btn.addEventListener("click", () => {
   if (body.classList.contains("fondo-claro")) {
       body.classList.remove("fondo-claro");
       body.classList.add("fondo-oscuro");
       localStorage.setItem("mode", "fondo-oscuro");
   } else {
       body.classList.remove("fondo-oscuro");
       body.classList.add("fondo-claro");
       localStorage.setItem("mode", "fondo-claro");
   }
});

