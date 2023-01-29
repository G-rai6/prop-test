import React from "react";

export default function Card(props) {
  return (
    <div className="container1">


    <div className="container">
      <div  className="imagebg">
        <p className="discount">-25%</p>
        <img src={props.url} alt="image of the product"/>
        <span style={{margin:'0px',padding:"5px"}} className="material-symbols-rounded">favorite</span>
      </div>
      <div className="heading">
        <p>{props.heading}</p>
        <p>{props.price}</p>
      </div>
      <div className="heading">
        <div style={{ padding: "0", margin: "0" }} className="radio">
          <span style={{ padding: "0" }} className="material-symbols-rounded">
            radio_button_unchecked
          </span>
          <span
            style={{ padding: "0", color: "red" }}
            className="material-symbols-rounded"
          >
            radio_button_unchecked
          </span>
          <span
            style={{ padding: "0", color: "blue" }}
            className="material-symbols-rounded"
            >
            radio_button_unchecked
          </span>
        </div>
        <div className="radio">
          <p style={{ padding: "0", margin: "3px" }}  >S</p>
          <p style={{ padding: "0", margin: "3px" }} >M</p>
          <p style={{ padding: "0", margin: "3px" }} >L</p>
        </div>
      </div>
      <div className="heading">
        <p className="radio">
        
          <span
            style={{ padding: "0", margin: "0" }}
            className="material-symbols-rounded"
          >
            star
          </span>
          {props.rating}
        </p>

        <p style={{color:"purple"}} >BUY+</p>
      </div>
            </div>
            <div className="container2">
                <div className="left">
                    <p>Monday Happy</p>
                    <p style={{color:"red",fontWeight:"bold"}}>#MONHAPPY</p>
                </div>
                <div className="right">
                    <p>20%</p>
                    <p>OFF</p>
                </div>
            </div>
    </div>
  );
}
