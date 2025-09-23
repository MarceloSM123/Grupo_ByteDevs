saludar = function () {
  let txtNombre;
  txtNombre = document.getElementById("txtNombre").value;
  let txtApellido;
  txtApellido = document.getElementById("txtApellido").value;
  let saludo;
  saludo = generarSaludo(txtNombre, txtApellido);
  console.log(saludo);
  return saludo;
};
