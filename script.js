function checkName() {
  var name = document.getElementById("nameInput").value.toLowerCase();

  if (name === "gabriel") {
    window.location.href = "pagina2.html";
  } else if (name === "sarah") {
    window.location.href = "pagina3.html";
  } else if (name === "nome3") {
    window.location.href = "pagina4.html";
  } else if (name === "nome4") {
    window.location.href = "pagina5.html";
  } else {
    // Tratamento para outros nomes ou ações
    alert("Nome não reconhecido. Tente novamente.");
  }
}
