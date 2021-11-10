import Dp from "./Dp";
import React from "react";
import ReactDOM from "react-dom";

const dplist = [
  { id:"1",image: "public/assets/images/profile-pic.jfif", label: "Prakash TM",mic:"/assets/images/meet-mic.svg" },
  { id:"2",image: "public/assets/images/profile-pic.jfif", label: "Prakash TM" ,mic:"/assets/images/meet-mic.svg"},
  { id:"3",image: "public/assets/images/profile-pic.jfif", label: "Prakash TM" ,mic:"/assets/images/meet-mic.svg"},
  { id:"4",image: "public/assets/images/profile-pic.jfif", label: "Prakash TM",mic:"/assets/images/meet-mic.svg" },

];




const ParticipationBar=()=>{
  const _renderList = () => {
    return dplist.map((item, index) => {
        return <Dp key={index} label={item.label} image={item.image} mic={item.mic} />
    })
}
return(
  <>
  {_renderList()}
  </>
)
}
ReactDOM.render(<ParticipationBar />, document.getElementById("root"));
