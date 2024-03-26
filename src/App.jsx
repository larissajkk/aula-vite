import Card from "./components/Card"
import Foto01 from "./assets/imgs/foto1.jpg"
import Foto02 from "./assets/imgs/foto2.jpg"
import style from "../src/App.module.css"

function App() {

  return (
    <>
      <Card title="paisagem01"
            image={Foto01}
            text1="texto sobre a paisagem"
            text2="Curitiba-PR"/>
      
      <Card title="paisagem02"
            image={Foto02}
            text1="texto sobre a paisagem 2"
            text2="Guaratuba-PR"/>
    </>
  )
}

export default App
