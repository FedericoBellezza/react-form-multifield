import { useState } from "react";
import Header from "./assets/components/Header";

function App() {
  const [titles, setTitles] = useState([
    {
      title: "Il mio cane di nome Doggo",
      img: "https://pbs.twimg.com/profile_images/1371936477848944649/C1LgElS5_400x400.jpg",
      content: "Bellissima foto di un cane.",
      category: "Animali",
      isPublic: "true",
    },
    {
      title: "Occhio ai colori",
      img: "https://media.istockphoto.com/id/814423752/it/foto/occhio-di-modello-con-make-up-artistico-colorato-primo.jpg?s=612x612&w=0&k=20&c=OFhqyikwC47uoihOoQdQ4hnyVPo3qhyFPWldANTEjzk=",
      content: "Occhio per occhio.",
      category: "Arte",
      isPublic: "true",
    },
    {
      title: "Verso l'infinito ed oltre",
      img: "https://cdn.pixabay.com/photo/2018/02/27/18/17/road-3186188_640.jpg",
      content: "Chissà dove porterà questa strada..",
      category: "Natura",
      isPublic: "true",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Casual");
  const [isPublic, setIsPublic] = useState("true");
  const [title, setTitle] = useState("");
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

  // - Alla modifica dell'input
  const handleFormChange = (e) => {
    if (e.target.name === "title") setTitle(e.target.value);
    if (e.target.name === "img") setImg(e.target.value);
    if (e.target.name === "content") setContent(e.target.value);
    if (e.target.name === "category") setCategory(e.target.value);
    if (e.target.name === "isPublic") setIsPublic(e.target.value);
  };

  // - All'invio del form
  const handleFormSubmit = (e) => {
    event.preventDefault();
    if (!title) return;
    if (!img) return;
    if (!content) return;
    setInputValue({
      title,
      img,
      content,
      category,
      isPublic,
    });

    console.log("Aggiunto il titolo: " + title);
    newTitles = [
      ...titles,
      {
        title,
        img,
        content,
        category,
        isPublic,
      },
    ];
    setTitles(newTitles);
    console.log(newTitles);
    setTitle("");
    setImg("");
    setContent("");
  };
  return (
    <>
      <div className="container">
        <Header />

        <form
          onChange={handleFormChange}
          onSubmit={handleFormSubmit}
          className="row g-3 input-group mt-5"
        >
          {/* Titolo */}
          <div className="col-6">
            <input
              onChange={handleFormChange}
              name="title"
              type="text"
              className="form-title form-control"
              value={title}
              placeholder="Titolo"
            />
          </div>
          {/* Immagine */}
          <div className="col-6">
            <input
              onChange={handleFormChange}
              name="img"
              type="select"
              className="form-img form-control"
              value={img}
              placeholder="Immagine"
            />
          </div>
          {/* Categoria */}
          <div className="col-6">
            <select
              onChange={handleFormChange}
              name="category"
              className="form-category form-select"
              aria-label="Default select example"
            >
              <option selected>Categoria</option>
              <option>Arte</option>
              <option>Animali</option>
              <option>Tecnologia</option>
              <option>Natura</option>
              <option>Musica</option>
            </select>
          </div>
          {/* Pubblico */}
          <div className="col-6">
            <select
              onChange={handleFormChange}
              name="isPublic"
              className="form-ispublic form-select"
              aria-label="Default select example"
            >
              <option value={true} selected>
                Pubblico
              </option>
              <option value={false}>Privato</option>
            </select>
          </div>
          <div className="col-12">
            <textarea
              onChange={handleFormChange}
              name="content"
              className="form-description  form-control textarea"
              value={content}
              placeholder="Descrizione"
            />
          </div>
          <button className="btn rounded btn-outline-secondary">
            Aggiungi
          </button>
        </form>
        <hr />
        <div className="row row-cols-3 g-3 mb-5 ">
          {/* Stampo una card per ogni elemento dell'array "titles" dinamicamente */}
          {titles.map((element) => {
            if (element.isPublic === "false") return;
            return (
              <>
                <div key={element} className="col">
                  <div className="card">
                    <div className="img-container">
                      <img
                        src={element.img}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>

                    <div className="card-body d-flex align-items-stretch justify-content-between flex-column">
                      <h5 className="card-title">{element.title}</h5>
                      <p className="card-text">{element.content}</p>
                      <div className="d-flex flex-row  justify-content-between">
                        <div href="#" className="badge text-bg-primary">
                          {element.category}
                        </div>
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
