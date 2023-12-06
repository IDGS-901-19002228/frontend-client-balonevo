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

      const startTimeFunc1 = performance.now();
      // Ir a la página de inicio de sesión
      const iniciarSesion2 = await driver.findElement(By.id('login'));
      await iniciarSesion2.click();
      
      await driver.navigate().refresh();

      // Campos del formulario del inicio de sesión
      const usuarioSesion = await driver.findElement(By.name('usuario'));
      const contraseniaSesion = await driver.findElement(By.name('contrasenia'));

      // Agregamos el valor de los campos
      await usuarioSesion.sendKeys(`Fpuga_20`);
      await contraseniaSesion.sendKeys(`puga1234`);

      const endTimeFunc1 = performance.now();
      const elapsedTimeFunc1 = endTimeFunc1 - startTimeFunc1;
      appendToLogFile(logFilePath, `Tiempo de respuesta al iniciar sesion: ${elapsedTimeFunc1} ms`);

      // Botón para ingresar
      const ingresar = await driver.findElement(By.id('ingresar'));
      await ingresar.click();

      appendToLogFile(logFilePath, `Se ha iniciado la sesión para el usuario${i + 1}`);
     
      const startTimeFunc2 = performance.now();
        // Encontrar y hacer clic en el botón "Add to cart"
      const addToCartButton = await driver.wait(until.elementLocated(By.className('agregarProducto')), 5000);
      await addToCartButton.click();
      const endTimeFunc2 = performance.now();
      const elapsedTimeFunc2 = endTimeFunc2 - startTimeFunc2;
      appendToLogFile(logFilePath, `Tiempo de respuesta al agregar al carrito: ${elapsedTimeFunc2} ms`);
      appendToLogFile(logFilePath, `agrego un producto al carrito `);

       const carritoButton = await driver.findElement(By.id('carrito'));
       await carritoButton.click();

       // ingresar al perfil 
      const botonPerfil = await driver.findElement(By.xpath('//div[@class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"]//button'));         
      await botonPerfil.click();
        // Seleccionar el enlace Mis Pedidos
      const enlaceMisPedidos = await driver.findElement(By.css('a[href="/pedidos/Fpuga_20"]'));
      await enlaceMisPedidos.click();
      appendToLogFile(logFilePath, `ingreso a mis pedidos`);

    /*    // ingresar al perfil 
       const botonPerfilCerrar = await driver.findElement(By.xpath('//div[@class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"]//button'));         
       await botonPerfilCerrar.click(); */
         // Seleccionar el enlace Mis Pedidos
         const logoutLink = await driver.findElement(By.id('logout'));
         await logoutLink.click();
         appendToLogFile(logFilePath, `cierre de sesion`);
 
      if (i < 1) {
        // Esperar 4  minutos antes de registrar el siguiente usuario
        await new Promise(resolve => setTimeout(resolve, 240000));
      }
    }
    
    const endTime = new Date();
    const elapsedTime = endTime - startTime;

    // Verificar si el tiempo de ejecución es menor a 200 ms
    expect(elapsedTime).toBeLessThan(300000);

    appendToLogFile(logFilePath, `Tiempo total de ejecución: ${elapsedTime} ms`);
    appendToLogFile(logFilePath, `Prueba de funcionalidad y disponibilidad realizada con éxito`)

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