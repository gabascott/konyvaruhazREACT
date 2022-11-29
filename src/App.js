import { useState } from 'react';
import './App.css';
import Konyv from './Konyv';
import Kosar from './Kosar';
import KosarModel from './model/KosarModel';

const konyvTomb = [
  {
    konyvId:1,
    cim:"A Gyűrűk Ura",
    szerzo:"J.R.R. Talkin",
    ar: 5000
  },
  {
    konyvId:2,
    cim:"A Hobbit",
    szerzo:"J.R.R. Talkin",
    ar: 4000
  },
  {
    konyvId:3,
    cim:"Álmoskönyv",
    szerzo:"Krúdy Gyula",
    ar: 3000
  }
];

function App() {
  const [db, setDb] = useState(0);
  const [osszAr, setOsszAr] = useState(0);
  const [kosaram, setKosaram] = useState([]);
  const kosarModel = new KosarModel(kosaram);

  function kosarKezeles(adat){
    //State - reprezentálják az oldal tartalmát
    //Befrissítik azu oldal vonatkozó részét


    //console.log(adat);
    setDb(kosarModel.getDb());
    setOsszAr(osszAr+adat.ar);
    //kosaram.push(adat);
    //setKosaram(kosaram);
    kosarModel.setKosar(adat);
    setKosaram(kosarModel.getKosar());
    console.log(kosaram);
  }

  function novel(adat){
    console.log(adat);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>

      <section className='busket'>
        <table className='kosarTable'>
          <thead>
            <tr>
                <th>Cím</th>
                <th>Szerző</th>
                <th>Ár</th>
                <th>Db</th>
            </tr>
          </thead>
          <tbody>
            {kosaram.map((elem, index) =>{
              return(<Kosar kosar = {elem} key = {index} novel = {novel}/>)
            })}
          </tbody>
        </table>
        <p>Kosár tartalma: {db}</p>
        <p>Kosár végösszeg: {osszAr}Ft</p>
      </section>

      <article>
      {
        konyvTomb.map((konyv, index) =>{
          return(<Konyv konyvObj = {konyv} key = {index} kosarKezelesFv = {kosarKezeles}/>)
        })
      }
      </article>

      <footer>Somoskői Gábor</footer>
    </div>
  );
}

export default App;
