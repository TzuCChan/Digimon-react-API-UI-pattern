export default function Modal({digitalPhoto, digimonList, setShowModal}) {
  return (
    <div className = "modalBox">
      <div className = "digiModal">
      <img src = {`https://digimon-cyber-sleuth-api-nak.herokuapp.com/digi/`} alt="modal digimon fact"/>
      <div>
          {/* <span onClick = {() => setShowModal(false)}class = "close">&times;</span> */}
      </div>
    </div>
   </div>
  )
}