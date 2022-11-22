import './Konyv.css';

function Konyv(props) {

    function kosarba(){
        console.log(props.konyvObj);
        props.kosarKezeles(props.konyvObj);
    }

    return (
      <div className="konyvElem">
        <h3 className="cim">{props.konyvObj.cim}</h3>
        <p className="szerzo">{props.konyvObj.szerzo}</p>
        <span className="ar">{props.konyvObj.ar}Ft</span>
        <button onClick={kosarba}>Kosárba</button>
      </div>
    );
}

export default Konyv;