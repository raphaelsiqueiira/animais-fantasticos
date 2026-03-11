import AnimaNumeros from "./anima-numeros.js";
export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisJSON = await (await fetch(url)).json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });

      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        "ativo"
      );
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h2>${animal.especie}</h2><span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchAnimais("./animais-api.json");
}
