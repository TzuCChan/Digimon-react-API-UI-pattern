export default function Slider({digitalPhoto, digimonList, setShowSlider}) {
  return (
    <div className = "sliderBox">
      <div className = "digiSlider">
      <img src = {`https://digimon-cyber-sleuth-api-nak.herokuapp.com/digi/`} alt="slider digimon fact"/>
      <div>
          {/* <span onClick = {() => setShowSlider(false)}class = "close">&times;</span> */}
      </div>
    </div>
   </div>
  )
}