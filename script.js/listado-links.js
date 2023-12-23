function agregarEnlace() {
  const titulo = document.getElementById("link-title").value;
  const url = document.getElementById("link-url").value;

  if (titulo && url) {
      const enlace = { titulo, url };
      const listaEnlaces = JSON.parse(localStorage.getItem("enlaces")) || [];

      listaEnlaces.push(enlace);

      localStorage.setItem("enlaces", JSON.stringify(listaEnlaces));

      mostrarEnlaces();
  } else {
      alert("Por favor, ingresa un título y una URL.");
  }
}

function mostrarEnlaces() {
  const listaEnlacesHTML = document.getElementById("links-container");
  listaEnlacesHTML.innerHTML = "";

  const listaEnlaces = JSON.parse(localStorage.getItem("enlaces")) || [];

  listaEnlaces.forEach((enlace, index) => {
      const listItem = document.createElement("div");
      listItem.classList.add("link-item");

      const anchor = document.createElement("a");
      anchor.href = enlace.url;
      anchor.textContent = enlace.titulo;
      anchor.target = "_blank";

      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.addEventListener("click", () => {
          listaEnlaces.splice(index, 1);
          localStorage.setItem("enlaces", JSON.stringify(listaEnlaces));
          mostrarEnlaces();
      });

      listItem.appendChild(anchor);
      listItem.appendChild(botonEliminar);
      listaEnlacesHTML.appendChild(listItem);
  });
}

mostrarEnlaces();