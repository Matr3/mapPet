import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener(("blur"), (input) =>{
        valida(input.target);
        console.log(input.target)
    });
});
