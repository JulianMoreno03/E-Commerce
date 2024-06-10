import Header from "../Components/Header/Header";
import AsideBar from "../Components/AsideBar/AsideBar";
import Main from "./Components/Main";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <main className="  overflow-y-auto">

      <header>
        <Header />
      </header>

      <section className="grid grid-cols-[200px,1fr] h-full overflow-hidden " >
        <aside>
          <AsideBar />
        </aside>

        <article className="grid w-[80%] h-full justify-center items-center  pt-5">
          <Main />

          <footer>
            <Footer />
          </footer>

        </article>
      </section>
    </main>
  );
}


