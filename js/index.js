document.getElementById("input-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const tpnumber = document.getElementById("tpnumber").value;
  
  window.location.href = window.location.origin + "/sign-language.html"
});
