import React from 'react';

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

let array = [
  'WHISKY',
  'RON',
  'VINOS',
  "DESTILADOS",
  'LICORES',
  'OTROS',
  'OFERTAS',
];

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;1,400&display=swap"
            rel="preload"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <nav className="#FFFFFF relative ">
            <div className="h-auto md:h-20 w-full flex flex-col md:flex-row relative md:justify-between items-center px-0 xs:px-5 md:px-16 xl:px-20">
              <img
                className="h-12 mt-5 md:mt-0 cursor-pointer"
                alt="Bode bar logo"
                src="bodebar.png"
                style={{ left: '20%' }}
              />

              <form className="h-9 absolute right-0 sm:h-1/2 w-11/12 xs:w-8/12 sm:w-7/12 md:w-3/12 lg:w-4/12 xl:absolute xl:left-1/2 flex   justify-between items-center  border-b-2 transform xl:-translate-x-1/2 mt-4 md:mt-0">
                <input
                  type="text"
                  name="search"
                  className="h-full w-full border-none text-zinc-500   focus:outline-none focus-within:ring-0"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="fill-current text-zinc-500 hover:hover:text-zinc-300 h-5"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </form>
              <div className="h-14 w-full bg-white font-bold text-xs sm:text-sm text-zinc-300 flex flex-row     justify-between items-center px-5 md:h-full md:relative md:w-auto md:px-0 mt-3 md:mt-0">
                <p className="mr-4 cursor-pointer uppercase font-bold text-zinc-500 hover:text-zinc-300">
                  Productos
                </p>
                <p className="mr-4  cursor-pointer uppercase font-bold text-zinc-500 hover:text-zinc-300">
                  Moneda
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="fill-current text-zinc-500 hover:text-zinc-300 mr-4 h-5 cursor-pointer"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="fill-current text-zinc-500 hover:text-zinc-300 h-5 cursor-pointer"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z" />
                  </g>
                </svg>
              </div>
            </div>
            <ul className="h-16 w-full justify-evenly bg-orange-800 uppercase text-white font-bold items-center flex flex-row flex-wrap content-evenly sm:h-10 sm:grid sm:grid-cols-7 sm:grid-rows-1 sm:gap-0 list-none">
              {array.map((item) => {
                return (
                  <li className="h-1/2 sm:h-full w-1/4 sm:w-auto hover:bg-primary-500 cursor-pointer">
                    <a className="h-full w-full text-center flex justify-center items-center text-xs lg:text-sm tracking-wide uppercase">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
