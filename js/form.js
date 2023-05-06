document.querySelector('#submit').addEventListener('click', e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUÍ:
  const teléfono = '573197660129';

  
  const correo = document.querySelector('#email').value;
  const ciudad = document.querySelector('#ciudad').value;
  const nombre = document.querySelector('#cliente').value;
  const celular = document.querySelector('#celular').value;
  const dirección = document.querySelector('#dirección').value; 
  const municipio = document.querySelector('#municipio').value;
  const localidad = document.querySelector('#localidad').value;
  const barrio = document.querySelector('#barrio').value;
  const código = document.querySelector('#código').value;
  const departamento = document.querySelector('#departamento').value;
  const talla = document.querySelector('#talla').value;
  const numerodecalzado = document.querySelector('#numerodecalzado').value;
  const color = document.querySelector('#color').value;
  const cantidad = document.querySelector('#cantidad').value;
  const observaciones = document.querySelector('#observaciones').value;
 
 
 
  const resp = document.querySelector("#respuesta");

  resp.classList.remove('fail');
  resp.classList.remove('send');

  const url = `https://api.whatsapp.com/send?phone=${teléfono}&text=
          *_PEDIDO_*%0A
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
          *DIRECCIÓN*%0A
          ${dirección}%0A
          *CÓDIGO*%0A
          ${código}%0A
          *TALLA*%0A
          ${talla}%0A
          *NUMERO DE CALZADO*%0A
          ${numerodecalzado}%0A
          *COLOR*%0A
          ${color}%0A
          *CANTIDAD*%0A
          ${cantidad}%0A
          *OBSERVACIONES*%0A
          ${observaciones}`;
          
          
         
          
         
  if (nombre === '' || celular === '' || correo === '' ) {
    resp.classList.add('fail');
    resp.innerHTML = `Faltan algunos datos, ${nombre} ${celular} ${correo} ${departamento} ${localidad} ${barrio}
    ${dirección}`;
    return false;
  }
 
  resp.classList.remove('fail');
  resp.classList.add('send');
  resp.innerHTML = `TUS DATOS SE ENVIARON CON ÉXITO, ${nombre}`;

  window.open(url);
  window.alert('TUS DATOS SE ENVIARON CON ÉXITO');


  
});
