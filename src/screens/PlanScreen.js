import React,{useEffect} from 'react';
import "./PlanScreen.css";

function PlanScreen() {

    useEffect(() => {
        let buttonComponents = document.getElementsByClassName("planScreen__button") 
        console.log(buttonComponents) 
          for (let i = 0; i < buttonComponents.length; i++) {
            buttonComponents[i].addEventListener("click", function () {
              let current = document.getElementsByClassName("selected");
              console.log(current);
              if (current.length !== 0) {
                current[0].textContent = "Subscribe";
                current[0].className = current[0].className.replace(
                  " selected",
                  ""
               );
              }
              this.className += " selected";
              this.textContent = "Current Plan"
            });
            }
          }, []);
        
    return (
        <div className="planScreen">
            <div className="planScreen__plan">
                <div className="planScreen__info">
                    <h5>Premium</h5>
                    <h6>4k + HDR</h6>
                </div>
                <button className="planScreen__button">
                    Subscribe
                </button>
            </div>
            <div className="planScreen__plan">
                <div className="planScreen__info">
                    <h5>Standard</h5>
                    <h6>1080p</h6>
                </div>
                <button className="planScreen__button">
                    Subscribe
                </button>
            </div>
            <div className="planScreen__plan">
                <div className="planScreen__info">
                    <h5>Basic</h5>
                    <h6>720p</h6>
                </div>
                <button className="planScreen__button" >
                    Subscribe
                </button>
            </div>
            
        </div>
    )
}

export default PlanScreen
