import { useState } from "react";
import Header from "./assets/components/Header";

function App() {
  const [titles, setTitles] = useState([
    {
      title: "Titolo 1",
    },
    {
      title: "Titolo 2",
    },
    {
      title: "Titolo 3",
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
        <form onSubmit={handleFormSubmit} className="input-group mt-5 ">
          <input
            onChange={handleInputChange}
            type="text"
            className="form-control"
            value={inputValue}
            placeholder="Aggiungi il titolo di un post"
          />
          <input
            onChange={handleInputChange}
            type="text"
            className="form-control"
            value={inputValue}
            placeholder="Aggiungi il titolo di un post"
          />
          <input
            onChange={handleInputChange}
            type="text"
            className="form-control"
            value={inputValue}
            placeholder="Aggiungi il titolo di un post"
          />
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
