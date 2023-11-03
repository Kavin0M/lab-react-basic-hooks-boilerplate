import { useState, useEffect } from "react";
import "../App.css"

function UseState(){
    const [like, setLike] = useState(0)
    const [display, setDisplay] = useState(false)

    const textStyle = {
        display:display?"block":"none"
    }

    useEffect(() => {
        alert("Content Button Clicked")
    },[display])

  return (
    <div>
        <div style={textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        <br></br>
        <button onClick={() => setDisplay(display => !display)}>Content</button>

      <h3>{like}</h3>
      <button onClick={() => setLike(like => like + 1)}>Like</button>
    </div>
  );
}

export default UseState;