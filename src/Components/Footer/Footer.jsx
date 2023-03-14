import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <footer className="bg-gray-800 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white">Síguenos en las redes sociales</h4>
            <div className="mt-4">
              <button className="bg-white text-gray-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button className="bg-white text-gray-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={faFacebook} />
              </button>
              <button className="bg-white text-gray-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={faInstagram} />
              </button>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4">
            <div className="text-sm text-white font-semibold py-1">
              © 2023 Discord Fake, S.A. 
            </div>
          </div>
          <div className="w-full md:w-8/12 px-4">
            <ul className="flex flex-wrap list-none md:justify-end  justify-center text-center">
              <li>
                <a className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3" href="https://www.example.com">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3" href="https://www.example.com">
                  Políticas de privacidad
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3" href="https://www.example.com">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
