import React from 'react';
// import Image from 'next/image';

const array = ['botella4.png', 'botella5.png', 'botella6.png', 'botella7.png'];
const array1 = [
  'INICIO',
  'PRODUCTOS',
  'NOSOTROS',
  'TÉRMINOS Y CONDICIONES',
  'PREGUNTAS FRECUENTES',
  'CUENTA',
];

function HomePage() {
  return (
    <>
      <div className="bg-white  w-screen">
        <section className="w-full h-full px-0 justify-center">
          <div className="w-full">
            <img
              className="h-full object-center w-screen"
              alt="bodebar"
              src="rectangle.png"
            />
          </div>
          <div className="pb-24 px-8">
            <div className="w-full py-6 md:py-12 flex flex-col justify-between items-center">
              <h2 className="font-bold text-3xl md:text-4xl uppercase text-zinc-400 tracking-wide">
                Best Sellers
              </h2>
              <div className="bg-amber-900 h-1 w-28 mt-4"> </div>
            </div>
            <div className="w-full flex justify-evenly items-center">
              <button
                type="button"
                aria-label="left"
                className="h-6 sm:h-8 focus:outline-none focus-within:ring-0"
              >
                <svg
                  className="fill-current text-white hover:text-gray-100 h-full"
                  viewBox="0 0 75 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.1667 48.5L21.6667 37L33.1667 48.5ZM21.6667 37L33.1667 25.5L21.6667 37ZM21.6667 37H52.3333H21.6667ZM2.5 37C2.5 32.4694 3.39237 27.9832 5.12616 23.7974C6.85994 19.6117 9.40119 15.8084 12.6048 12.6048C15.8084 9.40119 19.6117 6.85994 23.7974 5.12616C27.9832 3.39237 32.4694 2.5 37 2.5C41.5306 2.5 46.0168 3.39237 50.2026 5.12616C54.3883 6.85994 58.1916 9.40119 61.3952 12.6048C64.5988 15.8084 67.1401 19.6117 68.8738 23.7974C70.6076 27.9832 71.5 32.4694 71.5 37C71.5 46.15 67.8652 54.9252 61.3952 61.3952C54.9252 67.8652 46.15 71.5 37 71.5C27.85 71.5 19.0748 67.8652 12.6048 61.3952C6.13481 54.9252 2.5 46.15 2.5 37V37Z"
                    stroke="#95353A"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {' '}
                  </path>
                </svg>
              </button>
              <div className="h-60 w-44 md:h-96 md:w-72 p-5 sm:flex justify-center flex-col items-center">
                <div className="h-3/4 pb-5">
                  <img
                    className="h-full object-center w-screen"
                    alt="botella"
                    src="botella1.png"
                  />
                </div>
              </div>
              <div className="h-60 w-44 md:h-96 md:w-72 p-5 sm:flex justify-center flex-col items-center bg-orange-900 round">
                <div className="h-3/4 pb-5">
                  <img
                    className="h-full object-center w-screen"
                    alt="botella"
                    src="botella2.png"
                  />
                </div>
                <div className="w-full h-1/4 text-secondary-100 font-semibold block">
                  <p className="h-full w-full flex items-center justify-center p-2 md:p-3 text-xs md:text-base bg-neutral-600 cursor-pointer rounded-md overflow-hidden text-center">
                    BUCHANAN’S DELUXE 12 AÑOS
                  </p>
                </div>
              </div>
              <div className="h-60 w-44 md:h-96 md:w-72 p-5 sm:flex justify-center flex-col items-center ">
                <div className="h-3/4 pb-5">
                  <img
                    className="h-full object-center w-screen"
                    alt="botella"
                    src="botella3.png"
                  />
                </div>
              </div>
              <button
                type="button"
                aria-label="left"
                className="h-6 sm:h-8 focus:outline-none focus-within:ring-0"
              >
                <svg
                  className="fill-current text-white hover:text-gray-100 h-full"
                  viewBox="0 0 75 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.3333 26L52.8333 37.5L41.3333 26ZM52.8333 37.5L41.3333 49L52.8333 37.5ZM52.8333 37.5H22.1667H52.8333ZM72 37.5C72 42.0306 71.1076 46.5168 69.3738 50.7026C67.6401 54.8883 65.0988 58.6916 61.8952 61.8952C58.6916 65.0988 54.8883 67.6401 50.7026 69.3738C46.5168 71.1076 42.0306 72 37.5 72C32.9694 72 28.4832 71.1076 24.2974 69.3738C20.1117 67.6401 16.3084 65.0988 13.1048 61.8952C9.90119 58.6916 7.35994 54.8883 5.62616 50.7026C3.89237 46.5168 3 42.0306 3 37.5C3 28.35 6.63481 19.5748 13.1048 13.1048C19.5748 6.63481 28.35 3 37.5 3C46.65 3 55.4252 6.63481 61.8952 13.1048C68.3652 19.5748 72 28.35 72 37.5Z"
                    stroke="#95353A"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {' '}
                  </path>
                </svg>
              </button>
            </div>
          </div>
          <div className="py-6">
            <div
              className="overflow-hidden hidden md:flex md:items-center px-28 py-48 justify-end place-self-center"
              style={{ backgroundImage: 'url(banner.png)' }}
            >
              <div className="z-10 w-2/5 font-bold text-center text-white flex  flex-col items-center">
                <p className="text-4xl mb-10">Nuestras Promociones</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
                  aspernatur qui officia molestias commodi aperiam ipsam nostrum
                  sunt rem
                </p>
              </div>
            </div>
          </div>
          <div className="w-full py-6 md:py-12 flex flex-col justify-between items-center">
            <h2 className="font-bold text-3xl md:text-4xl uppercase text-zinc-400 tracking-wide">
              LICORES
            </h2>
            <div className="bg-amber-900 h-1 w-28 mt-4"> </div>
          </div>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
            {array.map((item) => {
              return (
                <article className="w-full p-5 relative bg-white max-w-sm align-top mx-auto hover:shadow-md">
                  <div className="h-64 overflow-hidden flex items-center justify-center cursor-pointer">
                    <div className="h-50 w-44 md:h-96 md:w-72 p-5 sm:flex justify-center flex-col items-center ">
                      <img
                        className="object-center w-screen"
                        alt="botella"
                        src={item}
                      />
                    </div>
                  </div>
                  <div className="flex-col items-center h-auto px-4 pt-4">
                    <div className="flex flex-col w-60 font-bold mb-2">
                      <h1 className="text-gray-800 text-base">Licor</h1>
                      <div className="flex">
                        <div className="flex justify-start">
                          <p className="text-gray-500 text-sm">$ 99.99</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
            {array.map((item) => {
              return (
                <article className="w-full p-5 relative bg-white max-w-sm align-top mx-auto hover:shadow-md">
                  <div className="h-64 overflow-hidden flex items-center justify-center cursor-pointer">
                    <div className="h-50 w-44 md:h-96 md:w-72 p-5 sm:flex justify-center flex-col items-center ">
                      <img
                        className="object-center w-screen"
                        alt="botella"
                        src={item}
                      />
                    </div>
                  </div>
                  <div className="flex-col items-center h-auto px-4 pt-4">
                    <div className="flex flex-col w-60 font-bold mb-2">
                      <h1 className="text-gray-800 text-base">Licor</h1>
                      <div className="flex">
                        <div className="flex justify-start">
                          <p className="text-gray-500 text-sm">$ 99.99</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
      <div>
        <ul className="h-auto w-full flex flex-col md:flex-row list-none bg-zinc-700 py-2">
          {array1.map((item) => {
            return (
              <li className="md:h-full w-full md:w-1/5 px-4 py-4 hover:bg-zinc-300 cursor-pointer uppercase font-bold text-white text-sm text-center flex justify-center items-center">
                <a className="h-full w-full text-center flex justify-center items-center">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="h-auto w-full flex flex-col md:flex-row md:justify-center md:items-center text-center bg-zinc-700 justify-between items-center text-xs py-6 ">
          <p className="text-white">
            Copyright © 2020 Bodebar. Todos los Derechos Reservados.
            Desarrollado por Avila Tek
          </p>
        </div>
      </div>
    </>
  );
}
export default HomePage;
