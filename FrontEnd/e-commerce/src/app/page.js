import Header from "./Components/Header";
import AsideBar from "./Components/AsideBar";
import Main from "./Components/Main";

export default function Home() {
  return (
    <main className="relative h-screen overflow-y-auto">

      <header>
        <Header />
      </header>

      <section className="grid grid-cols-[200px,1fr] h-full overflow-hidden " >
         <aside>
            <AsideBar />
          </aside>

          <article>
            <Main />
          </article>
      </section>


    </main>
  );
}


