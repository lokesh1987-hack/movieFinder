import React from "react";
import Heading from "./Heading";
import Card from "./Cards";
import sdata from "./Sdata";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Heading />
      {sdata.map((value) => {
        return (
          <Card
            key={value.id}
            imgsrc={value.imgsrc}
            series={value.series}
            title={value.title}
            link={value.link}
          />
        );
      })}
    </div>
  );
}
