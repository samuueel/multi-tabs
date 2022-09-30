import { useState } from 'react'
import './App.css'

function App() {
  const [tab, setTab] = useState(1)

  const alternarTab = (index:any) => {
    setTab(index);
  };

  return (
    <div className="App">
      <div className="bloc-tabs">
        <button
          className={tab === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => alternarTab(1)}
        >
          Aba 1
        </button>
        <button
          className={tab === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => alternarTab(2)}
        >
          Aba 2
        </button>
        <button
          className={tab === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => alternarTab(3)}
        >
          Aba 3
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={tab === 1 ? "content  active-content" : "content"}
        >
          <h2>Titulo 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={tab === 2 ? "content  active-content" : "content"}
        >
          <h2>Titulo 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={tab === 3 ? "content  active-content" : "content"}
        >
          <h2>Titulo 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
