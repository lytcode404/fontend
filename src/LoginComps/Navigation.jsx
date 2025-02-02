import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Navigation = ({ handleLogin }) => {
  return (
    <>
      <Head>{`<style>
        header{
          font-family: 'Abril Fatface', cursive;
          font-family: 'Roboto', sans-serif;
        }
      </style>`}</Head>
      <header className="fixed w-full z-50">
        <nav className="bg-[#000] border-gray-200 py-2.5 dark::bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <Link href="#" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark::text-white">
                Nextgen Navigator
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <button
                onClick={handleLogin}
                className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark::bg-purple-600 dark::hover:bg-purple-700 focus:outline-none dark::focus:ring-purple-800"
              >
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
