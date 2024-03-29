import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "../Redux/count/CountSlice";
import randomColor from "randomcolor";
import { useState } from "react";
    function Counter() {
        const [c,setC]=useState()
        const count = useSelector(state => state.count.value);
        const dispatch = useDispatch();
        const Increment = () => {
            dispatch(increaseCount())
        };
        const Decrement = () => {
            dispatch(decreaseCount());
            setC(randomColor())
        };
        return (
            <div>
                <div className=" m-10 border-2 p-5">
                    <h2 className="text-3xl">Counter</h2>
                    <h4>the conuter is - {count}</h4>
                    <button className="border-2 " style={{backgroundColor:{c}}} onClick={Increment} >
                        Increment
                    </button>
                    <button className="border-2 m-5" onClick={Decrement}>
                        Decrement
                    </button>
                </div>
            </div>
        );
    }

export default Counter;
