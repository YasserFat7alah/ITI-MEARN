import { useDispatch, useSelector } from "react-redux"
import { decreaseCounter, increaseByCount, increaseCounter, resetCounter } from "../store/slices/counter";
import { useContext } from "react";
import CounterContext from "../context/counter";

export default function Counter() {
  const { counter } = useContext(CounterContext);
  const counterRedux = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    
    <div>
      <h2>Counter App </h2>
      <hr/>
      <div className="text-center my-4">
          <h3>CONTEXT COUNTER : {counter}</h3>

          <h3>COUNTER : {counterRedux.counterVal}</h3>
          <div className="d-flex justify-content-center my-4">
             <button className="btn btn-danger" onClick={() => dispatch(decreaseCounter())}>-1</button>
             <button className="btn btn-success mx-2" onClick={() => dispatch(increaseCounter())}>+1</button>
             <button className="btn btn-secondary mx-2" onClick={() => dispatch(increaseByCount(5))}>+5</button>
             <button className="btn btn-secondary mx-2" onClick={() => dispatch(increaseByCount(10))}>+10</button>
             <button className="btn btn-info"  onClick={() => dispatch(resetCounter())}>Reset</button>
          </div>
      </div>
    </div>
  )
}
