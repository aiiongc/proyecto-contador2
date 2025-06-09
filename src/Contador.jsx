import { useState } from "react";

// Contador tiene el valor del momento y setContador lo actualiza. Siempre son 2. UseState es donde iniciará.
function Contador() {
     const [contador, setContador] = useState(0);
     const incrementar = () => {
        setContador(contador + 1);
     };
     const decrementar = () => {
        setContador(contador - 1);
     };
     const resetear = () => {
        setContador(0);
     };

return(
    <div style={{ textAlign: 'center', padding:'20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Contador</h2>
        <h3 style={{ fontSize: '2.5rem', margin: '10px 0' }}>{contador}</h3>
        <div>
            <button onClick={incrementar} style={{ margin: '5px' }}>Incrementar</button>
            <button onClick={decrementar} style={{ margin: '5px' }}>Decrementar</button>
            <button onClick={resetear} style={{ margin: '5px' }}>Resetear</button>
        </div>
    </div>
    );
}

export default Contador;