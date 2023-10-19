import React, { useState } from "react";
import classes from "./saucescomponent.module.css";

export default function SaucesComponent() {
  const sauces = [
    {
      name: "Mayonaise",
      src: "https://www.rachelcooks.com/wp-content/uploads/2021/06/tartar-sauce-1500-6-square.jpg",
      text1: "Prva recenica o sosu",
      text2: "Druga recenica o sosu",
    },
    {
      name: "Sauce 2",
      src: "https://www.chilipeppermadness.com/wp-content/uploads/2023/02/Chipotle-Sauce-SQ-2023.jpg",
      text1: "Prva recenica o sosu",
      text2: "Druga recenica o sosu",
    },
    {
      name: "Sauce 3",
      src: "https://www.beyondthechickencoop.com/wp-content/uploads/2023/02/Tartar-Sauce.jpg",
      text1: "Prva recenica o sosu",
      text2: "Druga recenica o sosu",
    },
    {
      name: "Sauce 4",
      src: "https://www.rachelcooks.com/wp-content/uploads/2021/06/tartar-sauce-1500-6-square.jpg",
      text1: "Prva recenica o sosu",
      text2: "Druga recenica o sosu",
    },
    {
      name: "Sauce 5",
      src: "https://www.rachelcooks.com/wp-content/uploads/2021/06/tartar-sauce-1500-6-square.jpg",
      text1: "Prva recenica o sosu",
      text2: "Druga recenica o sosu",
    },
    {
      name: "Sauce 6",
      src: "https://www.rachelcooks.com/wp-content/uploads/2021/06/tartar-sauce-1500-6-square.jpg",
      text1: "Prva recenica o sosu",
      text2: "Druga recenica o sosu",
    },
    {
      name: "Sauce 7",
      src: "https://www.rachelcooks.com/wp-content/uploads/2021/06/tartar-sauce-1500-6-square.jpg",
      text1: "Prva recenica o sosu",
      text2: "Druga recenica o sosu",
    },
  ];
  const selectedSauce = {
    name: "Mayonaise",
    src: "https://www.rachelcooks.com/wp-content/uploads/2021/06/tartar-sauce-1500-6-square.jpg",
    text1: "Prva recenica o sosu",
    text2: "Druga recenica o sosu",
  };
  const [getSelectedSauce, setSelectedSauce] = useState(selectedSauce);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.sauce_display}>
          <h1>{getSelectedSauce.name}</h1>
          <div className={classes.image_container}>
            <img
              alt={getSelectedSauce.name}
              className={classes.selected_image}
              src={getSelectedSauce.src}
            ></img>
            <div className={classes.sauce_avatars_container}>
              {sauces.map((sauce, index) => (
                <img
                  key={index}
                  alt={sauce.name}
                  className={classes[`sauce_${index + 1}`]}
                  src={sauce.src}
                  onClick={() => {
                    setSelectedSauce({
                      name: sauce.name,
                      src: sauce.src,
                      text1: sauce.text1,
                      text2: sauce.text2,
                    });
                  }}
                ></img>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.sauce_text}>
          <p>{getSelectedSauce.text1}</p>
          <p>{getSelectedSauce.text2}</p>
        </div>
      </div>
    </>
  );
}
