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
      
      <section >
        <Main />
      </section>

      <aside >
        <AsideBar />
      </aside>

      </main>
  );
}


