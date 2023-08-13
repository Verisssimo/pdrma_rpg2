function checkName() {
  var name = document.getElementById("nameInpmaut").value.toLowerCase();

  if (name === "mateus") {
    window.location.href = "pagina2.html";
  } else if (name === "lvdovico") {
    window.location.href = "pagina2.html";
  } else if (name === "aquiles") {
    window.location.href = "pagina3.html";
  } else if (name === "nicolas") {
    window.location.href = "pagina3.html";
  } else if (name === "nollan") {
    window.location.href = "pagina4.html";
  } else if (name === "will") {
    window.location.href = "pagina4.html";
  } else if (name === "manuel") {
    window.location.href = "pagina5.html";
  } else if (name === "sara") {
    window.location.href = "pagina6.html";
  } else if (name === "bia") {
    window.location.href = "crisalidas.html";
  } else  {
    // Tratamento para outros nomes ou ações
    alert("Identificação inválida.");
  }
}
