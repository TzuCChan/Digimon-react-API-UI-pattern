import { useState } from 'react';
// import { digimonList } from '/digimonlist.js';
import Modal from './Modal.jsx';

export default function Home({ digimons }) {
  const [digitalPhoto, setDigitalPhoto] = useState("")
  const [digimonList, setDigimonList] = useState("")
  const [showModal, setShowModal] = useState(false)

  const toggleModal = (digitalInfo, digimonList) => {
    setDigitalPhoto(digitalInfo);
    setDigimonList(digimonList);
    setShowModal(prev => !prev);
  }

  let showDigimon = () => {
    let result = []
  }

  const imageArray = [
    "static.wikia.nocookie.net/digimon/images/0/0a/Otamamon_b.jpg/revision/latest?cb=20090208040237",
    "https://static.wikia.nocookie.net/digimon/images/b/bc/Motimon_b.jpg/revision/latest?cb=20090128044549",

  ]
  return (
    <div>
      {
        digimons.slice(0, 10).map((digimon, index) => (
          <div>
            {/* <img src={imageArray[index]} /> */}
            <img src={imageArray} />
            <h2>{`digimon: ${digimon.Digimon}`}</h2>
            <h2>{`stage: ${digimon.Stage}`}</h2>
            <h2>{`type: ${digimon.Type}`}</h2>
            <h2>{`attribute: ${digimon.Attribute}`}</h2>
         </div>
       ))
      }
    </div>
  )
}
