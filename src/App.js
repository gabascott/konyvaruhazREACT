import './App.css';
import Konyv from './Konyv';

const konyvTomb = [
  {
    cim:"A Gyűrűk Ura",
    szerzo:"J.R.R. Talkin",
    ar: 5000
  },
  {
    cim:"A Hobbit",
    szerzo:"J.R.R. Talkin",
    ar: 4000
  },
  {
    cim:"Álmoskönyv",
    szerzo:"Krúdy Gyula",
    ar: 3000
  }
];

function App() {

  function kosarKezeles(adat){
    console.log(adat);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>

      <article>
      {
        konyvTomb.map((konyvObj, index) =>{
          return(<Konyv konyvObj = {konyvObj} key = {index} kosarKezelesFv = {kosarKezeles}/>)
        })
      }
      </article>

      <footer>Somoskői Gábor</footer>
    </div>
  );
}

export default App;
