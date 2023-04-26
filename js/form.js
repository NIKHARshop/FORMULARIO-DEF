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
 
  const resp = document.querySelector("#respuesta");

  resp.classList.remove('fail');
  resp.classList.remove('send');

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_NIKHARshopformulario_*%0A
          *NOMBRE*%0A
          ${nombre}%0A
          *CELULAR*%0A
          ${celular}%0A
          *CORREO*%0A
          ${correo}%0A
          *DEPARTAMENTO*%0A
          ${departamento}%0A
          *CIUDAD*%0A
          ${ciudad}%0A
          *MUNICIPIO*%0A
          ${municipio}%0A
          *LOCALIDAD*%0A
          ${localidad}%0A
          *BARRIO*%0A
          ${barrio}%0A
          *DIRECCION*%0A
          ${direccion}%0A
          *CODIGO*%0A
          ${codigo}%0A
          *TALLA*%0A
          ${talla}%0A
          *COLOR*%0A
          ${color}%0A
          *OBSERVACIONES*%0A
          ${observaciones}`;
         
  if (nombre === '' || celular === '' || correo === '') {
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
