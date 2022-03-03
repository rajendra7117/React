import React from "react";

import "./MainPage.css";
import pizza from "../../Images/pizza.png";
import burger from "../../Images/hamburger.png";
import fastfood from "../../Images/fastfood.png";
import diet from "../../Images/diet.png";
import { motion } from "framer-motion";

import { useHistory } from "react-router-dom";
export default function MainPage() {
   const history = useHistory()
  const goToMainPage = (e) => {
    history.push("/food");
  };
  return (
    <motion.div className="main"
    initial={{x:-200}}
    animate={{x:0}}
    transition={{duration:.3}}
    exit={{x:"-100vw"}}
    >
      <div className="info">
        <div className="welcome-text">
          <p>
            Welcome to food-cart,
            <br />
            here you can find delicious food..
            <br />
            order your favourite food..
          </p>
          <button onClick={goToMainPage}>Order Now</button>
        </div>
        <div className="image-grid">
          <img className="pizza" src={pizza} />
          <img className="burger" src={burger} />
          <img className="diet" src={diet} />
          <img className="fastfood" src={fastfood} />
        </div>
      </div>
    </motion.div>
  );
}
