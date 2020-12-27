import React, { useState } from "react";
import "./styles.css";
const PcDatabase = {
  basic_Coding: [
    {
      CPU: "CPU:Ryzen 3 3200g",
      GPU: "GPU:Not Needed",
      performace: "4.5/5",

      description: "the best budget PC to start with coding and some basic gaming without too much of expense"
    },
    {
      CPU: "CPU Ryzen 3 3300X",
      GPU: "GPU :Rx 570",
      performace: "4.5/5",

      description:
        "an overall balanced build with good overall performance along with decent gaming experience"
    }
  ],
  Medium_Gaming: [
    {
      CPU: "CPU:Ryzen 5 3600",
      GPU: "1660S",
      performace: "Performace:3.5/5",

      description: "1080P king "
    },
    {
      CPU: "CPU:Ryzen 5600X",
      GPU: "3060ti",
      performace: "Performace: 4.5/5",

      description: "entry to ray tracing,with the the ampere cards and a CPU more powerfull than i9 10900k"
    }
  ],
  Professional_editing: [
    {
      CPU: "CPU:5900X",
      GPU: "3080",
      performace: "performace: 5/5",

      description: "A 12core beast CPU paired with the absolute monster GPU ,want 4k gaming with ray tracing or working on a blender project with realistic shadows and materials ,this is your way to go"
    }
  ]
};

export default function App() {
  // let usage = "basicCoding";
  var [selectedUsage, setSelecetedUsage] = useState("Professional_editing");

  function usageClickHandler(usage) {
    setSelecetedUsage(usage);
  }
  return (
    <div className="App">
      <h1>🖥️Best PC Partpicker</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my best Picks for your next PC. Select usage to get started{" "}
      </p>
      <h2>Pick your usage below </h2>

      {Object.keys(PcDatabase).map((usage) => (
        <button
          style={{
            fontSize: "2rem",
            color: "#FCD34D",
            backgroundColor: "#5B21B6",

            padding: "1rem",

            margin: "1rem"
          }}
          onClick={() => usageClickHandler(usage)}
        >
          {usage}
        </button>
      ))}

      <hr />
      <div>
        <ul style={{ listStyleType: "none" }}>
          {PcDatabase[selectedUsage].map((tusage) => (
            <li key={tusage.CPU}>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "#ffffff",
                  fontSize: "2rem",
                  fontFamily: "montserrat ",
                  borderTopLeftRadius: "0%",
                  fontWeight: "bolder"
                }}
              >
                {tusage.CPU}
              </div>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "#EE1927",
                  fontFamily: "montserrat ",
                  fontSize: "1.5rem"
                }}
              >
                {tusage.GPU}
              </div>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "#111111",
                  color: "#FFFFFF",
                  fontFamily: "BebasNeue"
                }}
              >
                {tusage.performace}
              </div>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "#ffffff",
                  fontFamily: "sans-serrif"
                }}
              >
                {tusage.description}
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
