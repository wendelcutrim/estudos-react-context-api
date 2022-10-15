import { useContext } from "react";
import { CounterContext } from '../context/CounterContext';

export const useCounterContext = () => {
    const context = useContext(CounterContext);

    if(!context) {
        return console.log("No context provided");
    };

    return context;
}