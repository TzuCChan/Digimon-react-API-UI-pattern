import { useState } from 'react';
import list from './digimonlist.js';
import Modal from './Modal.jsx';

export default function Home() {
  const [digimonList, setDigimonList] = useState(list);
  const [digimon, setDigimon] = useState(digimonList[0]);

  function clickLeft() {
    let index = digimonList.indexOf(digimon);
    if (index > 0) setDigimon(digimonList[index - 1]);
  }

  function clickRight() {
    let index = digimonList.indexOf(digimon);
    if (index < digimonList.length - 1) setDigimon(digimonList[index + 1]);
  }

  while (!digimon) return <h1>loading...</h1>;
  return (
    <div>
      <button onClick={clickLeft}>&lt;</button>
      <div>
        <img src={digimon.Image} />
        <h2>{`digimon: ${digimon.Digimon}`}</h2>
        <h2>{`stage: ${digimon.Stage}`}</h2>
        <h2>{`type: ${digimon.Type}`}</h2>
        <h2>{`attribute: ${digimon.Attribute}`}</h2>
      </div>
      <button onClick={clickRight}>&gt;</button>
    </div>
  );
}