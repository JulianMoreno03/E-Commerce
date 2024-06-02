import Image from "next/image";
import Header from "./Components/Header";
import AsideBar from "./Components/AsideBar";
import Main from "./Components/Main";

export default function Home() {
  return(
    <main  className="relative h-screen">

      <header>
        <Header />
      </header>
      
      <section className=" flex overflow-y-auto bg-green-700">
        <Main />
      </section>

      <aside className="  flex overflow-y-auto bg-blue-700">
        <AsideBar />
      </aside>

      </main>
  );
}


