
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
                <img className="rounded-lg" src="/public/quienes-somos.png" alt="Quienes Somos" />  
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
                <img className="rounded-lg" src="/public/mision.png" alt="Mision" />
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
                <img className="rounded-lg" src="/public/vision.png" alt="Visión" />
              </div>

            </div>

          </div>  
        </section>

        <section className="py-16 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            
            <div className="flex flex-wrap items-center">

              <div className="w-full lg:w-1/2">
                <img className="rounded-lg" src="/public/valores.png" alt="Valores" /> 
              </div>  

              <div className="w-full lg:w-1/2 pt-10 lg:pt-0">

                <h2 className="text-3xl font-bold">Valores</h2>   
                
                <ul className="mt-4 text-gray-500 leading-relaxed">
                  <li>Pasión por el Deporte...</li> 
                  <li>Excelencia...</li>
                  <li>Colaboración...</li>
                </ul>

              </div>

            </div>

          </div>  
        </section>

      </header>

      <section>
        <div>  

          <form >

            <div>
              <label>Nombre</label>
              <input 
                name="name"
                //value={formData.name}
                //onChange={handleChange}  
              />
              {/* {errors.name && <p>{errors.name}</p>} */}
            </div>

            <div>
              <label>Email</label> 
              <input
                name="email"
                //value={formData.email}
                //onChange={handleChange}
              />
              {/* {errors.email && <p>{errors.email}</p>}  */}
            </div>

            <div>
              <label>Mensaje</label>   
              <textarea
                name="message"
                //value={formData.message}
                //onChange={handleChange}  
              />
              {/* {errors.message && <p>{errors.message}</p>} */}
            </div>

            <button>Enviar</button>

          </form>
        
        </div>
      </section>


    </div>
  );
}

export default AboutPage;