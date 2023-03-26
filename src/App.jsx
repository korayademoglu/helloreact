import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Boostrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  const test = "Test Koray";

  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslar</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                img={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus ea amet totam recusandae commodi dolores repudiandae, ipsa magni non consequatur labore repellendus, similique odio blanditiis vero. Nihil, maiores pariatur."
              />
            </div>
            <div className="column">
              <Course
                img={Boostrap}
                title="Boostrap 5"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus ea amet totam recusandae commodi dolores repudiandae, ipsa magni non consequatur labore repellendus, similique odio blanditiis vero. Nihil, maiores pariatur."
              />
            </div>
            <div className="column">
              <Course
                img={Csharp}
                title="Backend"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus ea amet totam recusandae commodi dolores repudiandae, ipsa magni non consequatur labore repellendus, similique odio blanditiis vero. Nihil, maiores pariatur."
              />
            </div>
            <div className="column">
              <Course
                img={KompleWeb}
                title="Komple Web"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus ea amet totam recusandae commodi dolores repudiandae, ipsa magni non consequatur labore repellendus, similique odio blanditiis vero. Nihil, maiores pariatur."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
