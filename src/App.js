import Sidebar from './components/Sidebar'
import Popup from './components/Popup'
import {useState} from 'react'
import Create from './components/Create'

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="main">
      {/* TODO:
        Bisher nur Sidebar und PopUp als eigene Komponenten eingefügt.
        Weitere Elemente müssen noch in eigene Komponenten aufgeteilt werden. Aus Zeitgründen noch nicht umgesetzt.
        Mögliche Einteilung der Komponenten: MenuOptionen, Interaktionsfeld, ToggleButton, InteraktionsListe */}
      
      <Sidebar />

      {/* Optionsfenster */}
      <div className="options">
        <div className="menubox">
          <h1 className="title"><i class="bi bi-binoculars"></i> Point of Interest</h1>
          <div className="info">
            <p>Annotations</p><p>Interactions</p>
            </div>
        </div>

        {/* Interaktionsfeld mit Togglebutton */}
        <div className="whitebox">
        <h2>Interactions</h2>
          <div className="toggle-button">
            <button className="btn"><i class="bi bi-pencil"></i> Edit</button>
            <button className="btn inactive"><i class="bi bi-eye"></i> Preview</button>
          </div>

          {/* Interaktionsliste -> sollte in Komponente Create gefetched werden und als Array ausgegeben */}
          <div className="interaction">
            <div className="listenelement">
              Open cover  <i class="bi bi-three-dots"></i>
            </div>
            <div className="listenelement">
              Spin left gear  <i class="bi bi-three-dots"></i>
            </div>
          </div>
          <button className="btn-add" onClick={() => setButtonPopup(true)}>
          <i class="bi bi-plus-circle-fill"></i> Add Interaction
          </button>
        </div>

        {/* Popup mit Formular */}
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <Create />
        </Popup>
      </div>

      {/* Platzhalter-Screenshot für das 3D-Model */}
      <div className="container">
        <img src={require("./assets/images/screenshot_model.png")} alt=" "/>
      </div>
    </div>
  )
}

export default App
