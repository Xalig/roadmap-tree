import React from "react";
import { useState } from "react";
import Cards from "../Cards/Cards";
import './CardsItem.css'

const CardsItem = (props) => {
  const [titles, setTitle] = useState([
    { title: "FrontEnd", imageUrl: 'https://cdn-icons-png.flaticon.com/512/3939/3939992.png'},
    { title: "BackEnd", imageUrl: 'https://cdn-icons-png.flaticon.com/512/1119/1119022.png'},
    { title: "Data Analitika", imageUrl: 'https://cdn-icons-png.flaticon.com/512/1925/1925070.png'},
    { title: "Mobile", imageUrl: 'https://cdn-icons-png.flaticon.com/512/545/545245.png'},
    { title: "GameDev", imageUrl: 'https://cdn-icons-png.flaticon.com/512/686/686589.png'},
    { title: "QA", imageUrl: 'https://cdn-icons-png.flaticon.com/512/554/554200.png' },
    { title: "Sistem İnzibatçısı", imageUrl: 'https://cdn-icons-png.flaticon.com/512/2082/2082800.png' },
    { title: "İnformasiya Təhlükəsizliyi ", imageUrl: 'https://cdn-icons-png.flaticon.com/512/2092/2092629.png' },
    { title: "Cloud Mühəndis", imageUrl: 'https://cdn-icons-png.flaticon.com/512/1793/1793151.png' },
  ]);

  // const [clicked, setClicked] = useState(false)

  return (
    <ul className="card">
      {titles.map((title, ind) => (
        <li className="cards__item" onClick={props.clicked} >
          <Cards {...title}  />
        </li>
      ))}
    </ul>
    
  );
};

export default CardsItem;
