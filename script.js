document.getElementById("submit").onclick = tempreture_converter;

function tempreture_converter() {
  let fahrenheit = document.getElementById("fahren").value;
  let celsius = document.getElementById("celsi").value;

  if (fahrenheit != "" || null) {
    celsius = (fahrenheit - 32) / 1.8;
  } else {
    fahrenheit = celsius * 1.8 + 32;
  }

  document.getElementById("fahren").value = Math.round(fahrenheit);
  document.getElementById("celsi").value = Math.round(celsius);
}
