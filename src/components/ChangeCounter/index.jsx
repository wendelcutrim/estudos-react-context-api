// 3 - Alterando o contexto

import  './style.css';

import { useContext } from "react";

import { CounterContext } from "../../context/CounterContext";

function ChangeCounter({variantOne, variantTwo}) {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div className="btn-control">
        <button className={variantOne} onClick={() => setCounter(counter + 1)}>Add value to counter</button>
        <button className={variantTwo} onClick={() => setCounter(counter - 1)}>Remove value from counter</button>
    </div>
  )
}

export default ChangeCounter