
//import { useState } from 'react';

// import imgQuienesSomos from "./img/quienes-somos.png";
// import imgMision from "./img/mision.png";  
// import imgVision from "./img/vision.png";
// import imgValores from "./img/valores.png";

const AboutPage = () => {

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''  
  // });

  // const [errors, setErrors] = useState({});

  // const validateForm = () => {
  //   // Lógica validación 
  // }

  // const handleChange = (e) => {
  //   // Actualiza estado formData
  // }

  // const handleSubmit = (e) => {
    
  //   e.preventDefault();

  //   validateForm();

  //   if(Object.keys(errors).length) return;

  //   // Envía formulario

  // }

  return (
    <div>
      <header>
        <section className="pt-20 pb-16 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2">
                <img className="rounded-lg w-1/2" src="/public/quienes-somos.png" alt="Quienes Somos" />
              </div>
              <div className="w-full lg:w-1/2 pt-10 lg:pt-0">
                <h2 className="text-3xl font-bold">¿Quienes Somos?</h2>
                <p className="mt-4 text-gray-500 leading-relaxed text-justify">
                  Lions Sports Torres es una empresa dedicada al mundo del deporte...
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold">Misión</h2>
                <p className="mt-4 text-gray-500 leading-relaxed text-justify">
                  Nuestra misión es fomentar un estilo de vida activo...
                </p>
              </div>
              <div className="w-full lg:w-1/2 pt-10 lg:pt-0">
                <img className="rounded-lg w-1/2" src="/public/mision.png" alt="Mision" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold">Visión</h2>
                <p className="mt-4 text-gray-500 leading-relaxed text-justify">
                  Nos visualizamos como la referencia indiscutible en la industria deportiva...
                </p>
              </div>
              <div className="w-full lg:w-1/2 pt-10 lg:pt-0">
                <img className="rounded-lg w-1/2" src="/public/vision.png" alt="Visión" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2">
                <img className="rounded-lg w-1/2" src="/public/valores.png" alt="Valores" />
              </div>
              <div className="w-full lg:w-1/2 pt-10 lg:pt-0">
                <h2 className="text-3xl font-bold">Valores</h2>
                <ul className="mt-4 text-gray-500 leading-relaxed">
                  <li>- Pasión por el Deporte: Nuestra dedicación al deporte es la fuerza impulsora 
                        detrás de cada uno de nuestros esfuerzos y decisiones. 
                        Creemos en el poder del deporte para transformar vidas y comunidades.
                  </li>
                  <li>- Excelencia: Buscamos la perfección en todo lo que hacemos, 
                        desde el diseño de productos hasta la atención al cliente. 
                        Nos esforzamos por ofrecer lo mejor en cada interacción.
                  </li>
                  <li>- Colaboración: Creemos en el poder del trabajo en equipo y la colaboración. 
                        Valoramos las ideas y contribuciones de todos los miembros de nuestro equipo y socios.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto">
          <form className="shadow-md p-10 bg-white">
            <div className="mb-5">
              <label 
                className="block mb-2 font-bold text-gray-600">
                Nombre
              </label>
              <input 
                className="border p-3 w-full rounded outline-none focus:ring-2 focus:ring-indigo-400"
                name="name" 
              />
            </div>
            <div className="mb-5">
              <label  
                className="block mb-2 font-bold text-gray-600">
                  Email
              </label>
              <input
                className="border p-3 w-full rounded outline-none focus:ring-2 focus:ring-indigo-400" 
                name="email" 
              />
            </div>
            <div className="mb-5">
              <label 
                className="block mb-2 font-bold text-gray-600">
                  Mensaje
              </label>
              <textarea 
                className="border p-3 w-full rounded outline-none focus:ring-2 focus:ring-indigo-400"
                name="message">
              </textarea>
            </div>
            <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded text-white">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>

  );
}

export default AboutPage;