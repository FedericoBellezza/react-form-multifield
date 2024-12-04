import { useState } from "react";
import Header from "./assets/components/Header";

function App() {
  const [titles, setTitles] = useState([
    {
      title: "Titolo 1",
      img: "",
      content: "",
      category: "",
      isPublic: "true",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  let newTitles = [...titles];

  // - Funzione per eliminare un post
  const deleteTitle = (element) => {
    const index = newTitles.indexOf(element);

    if (index > -1) {
      console.log(`Eliminato il titolo: "${newTitles[index].title}"`);

      newTitles.splice(index, 1);
      setTitles(newTitles);
    }
  };

  // - Al cambio di stato dell'input del titolo
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // - All'invio del form
  const handleFormSubmit = (e) => {
    event.preventDefault();
    if (!inputValue) return;
    console.log("Aggiunto il titolo: " + inputValue);
    newTitles = [
      ...titles,
      {
        title: inputValue,
      },
    ];
    setTitles(newTitles);
    setInputValue("");
  };
  return (
    <>
      <div className="container">
        <Header />

        <form onSubmit={handleFormSubmit} className="row g-3 input-group mt-5 ">
          {/* Titolo */}
          <div className="col-6">
            <input
              onChange={handleInputChange}
              type="text"
              className="form-control"
              value={inputValue}
              placeholder="Titolo"
            />
          </div>
          {/* Immagine */}
          <div className="col-6">
            <input
              onChange={handleInputChange}
              type="select"
              className="form-control"
              value={inputValue}
              placeholder="Immagine"
            />
          </div>
          {/* Categoria */}
          <div className="col-6">
            <select class="form-select" aria-label="Default select example">
              <option selected>Categoria</option>
              <option>Cat 1</option>
              <option>Cat 2</option>
              <option>Cat 3</option>
            </select>
          </div>
          {/* Pubblico */}
          <div className="col-6">
            <select class="form-select" aria-label="Default select example">
              <option selected>Pubblico</option>
              <option>Privato</option>
            </select>
          </div>
          <div className="col-12">
            <textarea
              onChange={handleInputChange}
              className="form-control textarea"
              value={inputValue}
              placeholder="Descrizione"
            />
          </div>
          <button className="btn btn-outline-secondary">Aggiungi</button>
        </form>
        <hr />
        <div className="row row-cols-3 g-3 ">
          {/* Stampo una card per ogni elemento dell'array "titles" */}
          {titles.map((element) => {
            return (
              <>
                <div key={element} className="col">
                  <div className="default-card justify-content-between d-flex">
                    <div className="card-title">{element.title}</div>
                    <div>
                      <button className="btn btn-primary  me-3 ">
                        <i className=" fa-solid fa-pen"></i>
                      </button>
                      <button
                        className="btn btn-primary  "
                        onClick={() => deleteTitle(element)}
                      >
                        <i className=" fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
