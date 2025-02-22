import Login from "@/LoginComps/Login";
import Loader from "@/Utils/Loder";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { auth } from "@/db/firebase";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!user) {
    return <Login />;
  }

  if (
    router.pathname === "/exam/[slug]" ||
    router.pathname === "/tests/[test]"
  ) {
    return <Component {...pageProps} />;
  }
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 relative">
              <Component {...pageProps} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
