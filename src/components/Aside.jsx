import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import randomColor from "randomcolor";
import { change_color } from "../Redux/color/ColorSlice";
function Aside() {
  const color = useSelector(state => state.color.value)
  const dispatch=useDispatch();
  const handleColor=()=>{
    dispatch(change_color({color:randomColor()}))
  }


  
  return (
    <div>
      <div className=" text-right m-10 border-2 p-5" style={{ backgroundColor:color}}>
        <h4 className="text-3xl m-5">Aside</h4>
        <button className=" border-2 m-3" onClick={handleColor}>change color</button>
      </div>
    </div>
  );
}

export default Aside;
