const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');

jest.setTimeout(1200000);

test('Prueba de registro en la página', async () => {
  const driver = await new Builder().forBrowser('chrome').build();
  const logFilePath = 'resultadosPrueba.txt';

  try {
    await driver.get('http://localhost:5173/');

    const startTime = new Date();

    for (let i = 0; i < 2; i++) {  // Modificado para que solo se registren dos usuarios diferentes
      // Botón para ir al inicio de sesión
      const iniciarSesion = await driver.findElement(By.id('login'));
      await iniciarSesion.click();

      await driver.navigate().refresh();
      // Botón para ingresar al formulario de registro
      const registrar = await driver.findElement(By.id('registrarse'));
      await registrar.click();

      // Buscamos los inputs del formulario
      const nombre = await driver.findElement(By.id('nombre'));
      const usuario = await driver.findElement(By.id('usuario'));
      const correo = await driver.findElement(By.id('correo'));
      const contrasenia = await driver.findElement(By.id('contrasenia'));

      // Agregamos el valor
      await nombre.sendKeys(`fernando${i + 1}`);
      await usuario.sendKeys(`fernando${i + 1}`);
      await correo.sendKeys(`fernando${i + 1}@gmail.com`);
      await contrasenia.sendKeys(`fernando${i + 1}`);

      
      // Botón para registrarse
      const registrarCliente = await driver.findElement(By.id('registrarNuevoCliente'));
      await registrarCliente.click();
      
      
      appendToLogFile(logFilePath, `Confirmar registro registró del cliente ${i + 1}`);

      // Confirmar alerta del sweetAlert
      const confirmarRegistro = await driver.wait(until.elementLocated(By.css('.swal2-confirm.swal2-styled')));
      await confirmarRegistro.click();

      appendToLogFile(logFilePath, `Se ha registrado el cliente ${i + 1}`);

      // Ir a la página de inicio de sesión
      const iniciarSesion2 = await driver.findElement(By.id('login'));
      await iniciarSesion2.click();

      await driver.navigate().refresh();

      // Campos del formulario del inicio de sesión
      const usuarioSesion = await driver.findElement(By.name('usuario'));
      const contraseniaSesion = await driver.findElement(By.name('contrasenia'));

      // Agregamos el valor de los campos
      await usuarioSesion.sendKeys(`fernando${i + 1}`);
      await contraseniaSesion.sendKeys(`fernando${i + 1}`);

      // Botón para ingresar
      const ingresar = await driver.findElement(By.id('ingresar'));
      await ingresar.click();

      appendToLogFile(logFilePath, `Se ha iniciado la sesión para el usuario${i + 1}`);

      /* const cerrerar = await driver.findElement(By.id('cerrarSesion'));
      await cerrerar.click();
       */
      //Agregar al carrito 
      // const agregarProducto = await driver.findElement(By.css('agregarProducto'));
      // await agregarProducto.click();

      // //mostar carrito 
      // const mostrarCarrito = await driver.findElement(By.css('carrito'));
      // await mostrarCarrito.click();

      if (i < 1) {
        // Esperar 4  minutos antes de registrar el siguiente usuario
        await new Promise(resolve => setTimeout(resolve, 240000));
      }
    }
    
    const endTime = new Date();
    const elapsedTime = endTime - startTime;

    // Verificar si el tiempo de ejecución es menor a 200 ms
    expect(elapsedTime).toBeLessThan(200);

    appendToLogFile(logFilePath, `Tiempo total de ejecución: ${elapsedTime} ms`);
    appendToLogFile(logFilePath, `Prueba de registro exitosa`)

  } catch (error) {
    appendToLogFile(logFilePath, `Error en la prueba: ${error.message}`);
  } finally {
    await driver.quit();
  }
});

function appendToLogFile(filePath, log) {
  const logs = `${new Date().toLocaleString()}: ${log}\n`;

  fs.appendFile(filePath, logs, (err) => {
    if (err) {
      console.error(`Error writing to log file: ${err}`);
    }
  });
}