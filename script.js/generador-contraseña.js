function generarContrasena() {
  const longitud = document.getElementById("password-length").value;
  const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()-_=+";

  let contrasena = "";

 
  contrasena += mayusculas[Math.floor(Math.random() * mayusculas.length)];
  contrasena += minusculas[Math.floor(Math.random() * minusculas.length)];
  contrasena += numeros[Math.floor(Math.random() * numeros.length)];
  contrasena += simbolos[Math.floor(Math.random() * simbolos.length)];

  for (let i = 4; i < longitud; i++) {
      const randomType = Math.floor(Math.random() * 4);
      switch (randomType) {
          case 0:
              contrasena += mayusculas[Math.floor(Math.random() * mayusculas.length)];
              break;
          case 1:
              contrasena += minusculas[Math.floor(Math.random() * minusculas.length)];
              break;
          case 2:
              contrasena += numeros[Math.floor(Math.random() * numeros.length)];
              break;
          case 3:
              contrasena += simbolos[Math.floor(Math.random() * simbolos.length)];
              break;
          default:
              break;
      }
  }


  const contrasenaMezclada = contrasena.split('').sort(() => Math.random() - 0.5).join('');

  document.getElementById("password").innerText = contrasenaMezclada;
}