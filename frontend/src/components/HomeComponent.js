import React from "react";
import classes from "./homecomponent.module.css";

export default function HomeComponent() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.textarea}>
          <h1>Korpica</h1>
          <p>Najbolje pilece korpice u Novom Sadu!</p>
          <p>Po recepturi iz Subotice!</p>
          <button>
            <p>Naruci sada!</p>
          </button>
        </div>
      </div>
    </>
  );
}
