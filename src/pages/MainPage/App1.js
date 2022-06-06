import React from "react";
import { render } from "react-dom";
import Tree from "react-d3-tree";
import "./style1.css";

const svgSquare = {
  shape: "rect",
  shapeProps: {
    width: 200,
    height: 50,
    x: -105,
    y: -30,
    fill: "#ff0",
    stroke: "white",
    strokeWidth: 1,
  },
};
const svgPath = {
  shape: "path",
  orientation: "vertical",
  separation: { siblings: 1.5, nonSiblings: 2.5 },
  zoomable: true,
  translate: { x: 400, y: 50 },
  shapeProps: {
    d: "M0,0C70,0 70,-280 140,-280",
    fill: "white",
    stroke: "white",
  },
};

const myTreeData = [
  {
    name: "Frontend",

    _collapsed: true,

    children: [
      {
        name: "HTML",
        _collapsed: true,
        nodeSvgShape: {
          shape: "rect",
          shapeProps: {
            width: 180,
            height: 50,
            x: -95,
            y: -30,
            fill: "#ff0",
            stroke: "white",
            strokeWidth: 1,
          },
        },

        children: [
          {
            name: "Learn the basics",
            nodeSvgShape: {
              shape: "rect",
              shapeProps: {
                width: 180,
                height: 50,
                x: -95,
                y: -30,
                fill: "#ff0",
                stroke: "white",
                strokeWidth: 1,
              },
            },
          },
          {
            name: "Forms&Validations",
            nodeSvgShape: {
              shape: "rect",
              shapeProps: {
                width: 180,
                height: 50,
                x: -95,
                y: -30,
                fill: "#ff0",
                stroke: "white",
                strokeWidth: 1,
              },
            },
          },
          {
            name: "Convention",
            nodeSvgShape: {
              shape: "rect",
              shapeProps: {
                width: 180,
                height: 50,
                x: -95,
                y: -30,
                fill: "#ff0",
                stroke: "white",
                strokeWidth: 1,
              },
            },
          },
        ],
      },
      {
        name: "JavaScript",
        _collapsed: true,
        nodeSvgShape: {
          shape: "rect",
          shapeProps: {
            width: 180,
            height: 50,
            x: -95,
            y: -30,
            fill: "#ff0",
            stroke: "white",
            strokeWidth: 1,
          },
        },
        children: [
          {
            name: "Syntax",
            nodeSvgShape: {
              shape: "rect",
              shapeProps: {
                width: 180,
                height: 50,
                x: -95,
                y: -30,
                fill: "#ff0",
                stroke: "white",
                strokeWidth: 1,
              },
            },
          },
          {
            name: "DOM",
            nodeSvgShape: {
              shape: "rect",
              shapeProps: {
                width: 180,
                height: 50,
                x: -95,
                y: -30,
                fill: "#ff0",
                stroke: "white",
                strokeWidth: 1,
              },
            },
          },
          {
            name: "Fetch API",
            nodeSvgShape: {
              shape: "rect",
              shapeProps: {
                width: 180,
                height: 50,
                x: -95,
                y: -30,
                fill: "#ff0",
                stroke: "white",
                strokeWidth: 1,
              },
            },
          },
        ],
      },
      {
        name: "CSS",
        _collapsed: true,
        nodeSvgShape: {
          shape: "rect",
          shapeProps: {
            width: 180,
            height: 50,
            x: -95,
            y: -30,
            fill: "#ff0",
            stroke: "white",
            strokeWidth: 1,
          },
        },
        children: [
          {
            name: "Learn the Basics",
            nodeSvgShape: {
              shape: "rect",
              shapeProps: {
                width: 180,
                height: 50,
                x: -95,
                y: -30,
                fill: "#ff0",
                stroke: "white",
                strokeWidth: 1,
                textAnchor: "end",
              },
            },
          },
          {
            name: "Making Layouts",
            nodeSvgShape: {
              shape: "rect",
              shapeProps: {
                width: 180,
                height: 50,
                x: -95,
                y: -30,
                fill: "#ff0",
                stroke: "white",
                strokeWidth: 1,
                textAnchor: "end",
              },
            },
          },
          {
            name: "Media queries",
            nodeSvgShape: {
              shape: "rect",
              shapeProps: {
                width: 180,
                height: 50,
                x: -95,
                y: -30,
                fill: "#ff0",
                stroke: "white",
                strokeWidth: 1,
                textAnchor: "end",
              },
            },
          },
        ],
      },
    ],
  },
];

const App1 = () => {
  
  return (
    <div
    id="treeWrapper"
    style={{ width: "65em", height: "720px", textAlign: "center" }}
    >
      
      {/* <ul className="progressbar">
        <li className="active">Step1</li>
        <li>Step2</li>
        <li>Step3 </li>
      </ul> */}

      <Tree data={myTreeData} nodeSvgShape={svgSquare} {...svgPath} />
    </div>
  );
};

export default App1;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );
