document.querySelector('#submit').addEventListener('click', e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = '573197660129';

  const talla = document.querySelector('#talla').value;
  const correo = document.querySelector('#email').value;
  const codigo = document.querySelector('#codigo').value;
  const ciudad = document.querySelector('#ciudad').value;
  const nombre = document.querySelector('#cliente').value;
  const color = document.querySelector('#color').value;
  const celular = document.querySelector('#celular').value;
  const direccion = document.querySelector('#direccion').value; 
  const municipio = document.querySelector('#municipio').value;
  const localidad = document.querySelector('#localidad').value;
  const barrio = document.querySelector('#barrio').value;
  const observaciones = document.querySelector('#observaciones').value;
  const departamento = document.querySelector('#departamento').value;
  const numerodecalzado = document.querySelector('#numero de calzado').value;
 
  const resp = document.querySelector("#respuesta");

  resp.classList.remove('fail');
  resp.classList.remove('send');

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_NIKHARshopformulario_*%0A
          *NOMBRE*%0A
          ${Nombre}%0A
          *CELULAR*%0A
          ${Celular}%0A
          *CORREO*%0A
          ${Correo}%0A
          *DEPARTAMENTO*%0A
          ${Departamento}%0A
          *CIUDAD*%0A
          ${Ciudad}%0A
          *MUNICIPIO*%0A
          ${Municipio}%0A
          *LOCALIDAD*%0A
          ${Localidad}%0A
          *BARRIO*%0A
          ${Barrio}%0A
          *DIRECCION*%0A
          ${Direccion}%0A
          *CODIGO*%0A
          ${Codigo}%0A
          *TALLA*%0A
          ${Talla}%0A
          *COLOR*%0A
          ${Color}%0A
          *NUMERO DE CLAZADO*%0A
          ${Numerodecalzado}%0A
          *OBSERVACIONES*%0A
          ${Observaciones}`;
          
         
  if (nombre === '' || celular === '' || correo === '' || departamento === '' || ciudad === '' || loclaidad === '' || barrio === '' || direccion === '' || codigo === ''  || color === '' || talla === '' || observaciones === '' ) {
    resp.classList.add('fail');
    resp.innerHTML = `Faltan algunos datos, ${nombre}${celular}${correo}${departamento}${ciudad}${localidad}${barrio}
    ${direccion}${codigo}${color}${talla}${observaciones}`;
    return false;
  }
 
  resp.classList.remove('fail');
  resp.classList.add('send');
  resp.innerHTML = `Se ha enviado tu pedido, ${nombre}`;

  window.open(url);
  window.alert('TU PEDIDO A SIDO ENVIADO');


  
});
