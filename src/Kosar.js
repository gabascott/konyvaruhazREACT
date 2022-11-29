import './Kosar.css';

function Kosar(props) {

    function elemTorol(elem){
        console.log("töröltem");
    }

    function novel(){
        props.novel(props.kosar);
        console.log("hali");
    }

    function csokken(){
        props.csokken(props.kosar);
        console.log("hali");
    }

    return (
        <tr>
            <td>{props.kosar.cim}</td>
            <td>{props.kosar.szerzo}</td>
            <td>{props.kosar.ar}Ft</td>
            <td>{props.kosar.db}</td>
            <td id='plus'><button onClick={novel}>+</button></td>
            <td id='minus'><button onClick={csokken}>-</button></td>
            <td><button onClick={elemTorol}>Törlés</button></td>
        </tr>
    );
}

export default Kosar;