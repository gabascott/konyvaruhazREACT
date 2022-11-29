import './Konyv.css';

function Konyv(props) {

    function kosarba(){
        //console.log(props.konyvObj);
        //App.js kosarKezeles-ének hívása
        props.kosarKezelesFv(props.konyvObj);
    }

    return (
      <div className="konyvElem">
        <h3 className="cim">{props.konyvObj.cim}</h3>
        <p className="szerzo">{props.konyvObj.szerzo}</p>
        <span className="ar">{props.konyvObj.ar}Ft</span>
        {/**Könyv komponens kosár kezelésének hívása*/}
        <button onClick={kosarba}>Kosárba</button>
      </div>
    );
}

export default Konyv;