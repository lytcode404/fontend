import Image from "next/image";
import Link from "next/link";
export const Cta3 = () => {
  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex bg-gray-100 overflow-hidden rounded-global">
            <div className="sm:w-1/3 lg:w-1/2 hidden sm:block bg-gray-200 relative">
              <Image
                height="500"
                width="500"
                alt="alt"
                className="w-full h-full object-cover object-center absolute inset-0"
                src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&q=75&fit=crop&w=750"
              />
            </div>
            <div className="w-full flex items-center p-4 dark::bg-slate-900 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
              <div className="w-full flex sm:block flex-col items-center">
                <div className="mb-4 sm:mb-8">
                  <h2 className="text-xl font-bold text-center text-primary sm:text-2xl sm:text-left lg:text-3xl">
                    Get the latest updates
                  </h2>
                  <p className="text-center sm:text-left">
                    Sign up for our newsletter
                  </p>
                </div>
                <form className="w-full max-w-md flex gap-2 mb-3 sm:mb-5">
                  <input className="w-full flex-1 bg-gray-white placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 outline-none transition duration-100 px-3 py-2 rounded-global dark::text-black" />
                  <button className="inline-block hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-sm font-semibold text-center outline-none transition duration-100 px-8 py-2 text-white bg-indigo-500 rounded-global md:text-base">
                    Send
                  </button>
                </form>
                <p className="text-xs text-center sm:text-left">
                  <span>By signing up to our newsletter you agree to our </span>
                  <Link
                    className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
                    href="#"
                  >
                    Term of Service
                  </Link>
                  <span> and </span>
                  <Link
                    className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
                    href="#"
                  >
                    Privacy Policy
                  </Link>
                  <span>.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
