import { useState, useEffect } from 'react';
import list from './digimonlist.js';
import Modal from './Modal.jsx';

export default function Home() {
  const [digimon, setDigimon] = useState(null)
  const [digimonList, setDigimonList] = useState([])
  // let showDigimon = () => {
  //   let result = []
  // }

  // let newDigiList = []

  // let tenDigimon = digimonList.map((item) => {
  //   setTenDigi.push(item)
  // })
  
  //   const imageArray = [
  //     "https://www.grindosaur.com/img/games/digimon-world/digimon/77-otamamon.jpg",
  //     "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUQEhAVExUVFxUVEhUVEhUVGBcWGBUXFhcVFhUYHSggGBomGxUWITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFysdHRotLSsrKysrKystKysrLS0rLSsrLS0rLSstKzMtKzctNysrKy0rNzctLS0tNy0tLS03K//AABEIAPsAyQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQUCBAYHAwj/xABEEAABAwIEAwQHAwkGBwAAAAABAAIDBBEFEiExBkFREyJhgQcUMnGRobEjYnIzQkNEUpLB0fAVU4KT0uEWJCVjc4PC/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAhEQEBAQADAAMAAgMAAAAAAAAAAQIDESESMUEyUQQFE//aAAwDAQACEQMRAD8A9xREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARQiCUREBERAREQEREBERAREQEREBERAREQEREBEUEoJUKLqtxPHaWmt207GX2BdqfABBZqLrkpOL5ZSBSUMsrT+lkHZRHW2j9b/DksX1+LuOjKSIdO1fJ/8tRaZrr0XHCTFzqaukb4erPd8+1Cj1vGAfylJIBvo+O/zch8NOzCLmBj1YzWSiD28zTyGV3k0tb9VtYfxZSynIXOhkOnZzNyP+FyiLmxfIsA8HbVSSiGSIiAiIgIiICIiAiIgIiICIiCCVp4ticNMztJpAxu2vM8gBzKYpXsp43SvNg0eZPIAcyuSoMPfJL67Vi8xJ7CM6tpmHZoB0EttHEeOpRbOe6mWorq8XLjQwEHujvzyC+hJ07Hntm0PJffDcDpac5ooW59byus6R2v50lteqsD5++/zQo6M8cgSf5odfBERr4hCpREDfevlVUsczcksbZGndr2hw+BX1RCztUto6qms6jmzMBF6ac3a5ovdsc36LkPZcrzh/iGOqDmFpimjsJoX+0w23uNHN0Oo6L4rTxHD2S5XX7OVl+xmA7zNrtNvaYbC45ow3x/sdaCEBVFw7jXrDXRygR1EWk8etgf2mE+0w2Nj8QFeMRgyREQEREBERAREQEREBfNzt9bW5r6LluNK1xEdFES2SpdZzm6GOEflJLjYi7R/iQaFPUGunNUdYIyW0jCNHP1D5T8BlvyJ6q2PhrdYQQtja2Ngysa0MYOjRoAqTjjiD+z6KSoAu8kRxD751BPkHI6syZnaeJeLqPDh9tLeTdsTdXkeWgHmudo/S1QSOymCdg6huYAG2rrbDVeIVE8kji97y57tXucSST4u3Xtnoqx3CYqERPMUcoDjOJGXLhfe9tR4IyvJe3dUNbFURtmhkEkbr5XN8Lgg8wbgjyWwPevJvR9xNF/as9LTh3qtQXGBp2a5rS5zmi9gC4H4r1ohG2NfKIREAuQOqLvlV1McLHSyyNZG0FznuNgABc+/Qclx1b6U8KjdlEj5PvMbp81596WuJZKmrfSg/YwEAAHRzsodmcNr3NvJVfo0p6SXEIWVhAiIdYONmmTTKHcrb7o59cl7e7YFxHR1zb007ZCNXM2e0eIP8FaX/r/AGXnfpZioqFkNXRmOCrErRGISAHM3cHBnLbdddwnjja+kiqgLOdYSAbCQAZh80ace+/KnGKd7XMrIG3nhtmbmt2sO7oj5gEHlY9V12G1jJ4mTRnMyRrXtPg4XCp1r8MSdhPNRmwYT21MLW7p1kaOWVpLAPejPlz1fHVIoBRGKUREBERAREQERQUBcRRvE9bVVNj9lekjJJ0yvJmt7yGfuhdnO/K0noCfkuL4SuaOOUnvTk1D/wAUliUX4p3VuuD9NdO9+GhzQSGTMc/wbleMx8yPiu8uvjW0sc0b4ZG5o5BZ48N+fiAjq1PH5YjhLvAdVjNBbU6+S9Jxr0V1sLv+WLaiL83vZXgfeBsCVXUvo2xOchpibE2+r3vFh5DUoxufHy9D1E+TE4pALtia9zttAWOaL+a98P8AXnqqHg3hWDDIeyjOd7heWUjVxvew00Gw8lfBGnHOhZRGxHvCxRF6/NPGFG9lfVRu0Ikudti0EKqNJfcgr2r0lcESVTjW01jIG2li074Fzmb1dy35BeQ1THxG0sb4yL6Pjc36jVGUzPpXSh2bvEk23Jvp0v0XtXoMkf6lM0juNmBYeRLr5rfBq8pw/B6itlbHBE59yBmynKLncu2AX6G4VwRlBSRUzbXaLyOGzpCAHHzsiuc9a8W1lWYy/sTDWEkCnce0sLkxPFnN/eyHTorNfOqhEjHxkXDmkH4Ej5hGup3HSBSqDgauM9DA9xJcGNZITvnaLO+a6BHGIiICIiAiIgKCpUFBT8XVJioqiQbtjcfkqnBIclNTs/ZijHyW9x+62HVZ6Qv+igCwA8B9EbcIiIjoAmvW6KRpZDpiHA3AIOU2IvqDv9EO/vVQXPpZ5XuY58M7mOD2NL3RubG1mVzRrlOW9/FK7imggYZJalrQN227/wC5uEV+Ui3B06KV5VQ+mCJ1bIJWFlIQ1kRAJc22pkeOdyeQGgC9Ch4joXtDxVwkHUDOMxvt3d7oicmasjI24aXDMdWi9iba6arCaFj/AG42PP3o2O+oVVh7nVNR61kdHFG10dOXAtdI51w97mnUNGlvcd7hXKJnrCJjW6MY1n4WNb9As0RFupBSzdQg6+OyDX4AGWKeP9mrqvg6Zzh8l1K5LgOAtfWuzXDqqWw6We4LrQjiv2lQFKIgREQEREBQVKgoOe9II/6bVja8L/onIe4fROOhnpH0/OotA33v/wBgVJ022FgjfhiEREbiIiCQbbLyT0+4bdtLVCw9qF1gN9X3XrV1QcfYcKihkblDnRlkrL8sj2l3xaCEqtx8uo/NTMOmcMzY3EdbFdf6HsNEuKRh7dGNkeQRsWtuL/BdHG8WGWwGhAt1XTejjD29vUVQaBYNhB273tO0/C9qrL67f8r/AFc4cTc127x2u+vnyRAis5OoIiIClu4UJdCvnwSAGVAPtetVJOvIyuLfiF0q5PA5BFXzQ2t28QnZ/wCstjefjI1dYji19pRFARCUREBERAWLkcVznFWNvjy0lMA+plHdB2jYTYzO8B05oK2omNZXZwSIKO7W6XEs8lr2P/bEY/zQrVa2GYfHTRNhjHdZzOpcfznuPMnqtm+hO9rm3W3JHZx5+MEWvh1UJoY5gLCRjXAe8LYCLCIiAp05i45jqOeihYyAkEA68kOu/HFT8AOEjuxqQyJzrta6O7owdXZTm11LjtpddXhOHR0sTYYtWjcndzjuVAri3RzO91HNfelLnAudp0HRJI13rdz1q+R9kREZCIiBZFW4lX9nPTQ/3z3A+5qsj0RHatx+idJGx8f5WnkFRD0Ja1zXA+9r3+dl0WA4rHVwMqIyCHjUc2u2cx3RwNwR1Cr/AOrqngnOH1Had1tJUP8AtRsIZyNHjo1773+88Ix5c/rukWN1N0YJREQERQgquJsYFHA6ctLyLCNg3e86NYPeVS4TQuja58tnTy6zv6ncMbf8wX0HiVHE7hNX0kGa4iEs8rNbXAaYSeurXrfKN+LHfpZRIbNcfA/RStPE5wxhubWBJ91v5kI3k7vrS4NcTRQNtbIMg9zbAFXIVHwS9/qjGSCz47sePvDQq8RIiIiBERAKlQiJttEREQIEQIfqnxgj1ik02lDQel2uOnwVwuY4qkI7KTX7OpidobaBrx/FdQ7dE6z1UL5VVK2ZjongFr2lpuPgfIgHyX1SyIvs6ODKx74TDJ+Up3GFx/aa3Rjz+JoB810IXJ4USzEXNB7stN2rhyzMkZGD78q6sI4tTqskREQLVr6lsUT5XbMa55t0aCT9FtL5yxNcC1wDgRZwIuCDoQQdwg8X4Gx0Pr5pamWz6iKPIXGzGkOlGUHkLZbea9KIt16LyvjXh2mo6t0MTCI5ImENe8u1Dnk5M3s2uLAbL60XE9fBTDL9pGXthhqJXZntcfaaAQTIG903O91WVvjfUenSPDRc6DkufxMGocynHtTOAP3YRq9/uBLB5rmMO4prXytjlb6z2hyxsYGsfmHQaNLdrknSw6r0XhrAnxOdUzkOmeMoAsWxMJv2UZtttc87C+wtPylaXlmcefdVuFN7OoqouQeH/wCZmP8ABWq0Ita6scNstML+IbJce/ULfKlbP8YIiIsIiIgREQEREBAiBEuc4hoxMY4HbSzsadbXGSQ+WoC3uHK1z4xHJpLGTFJ4uZoXW8bXCx4hjLeyqWgHsJo5JB9wB7T83BaXpDwyRkbq+kkezMB602LXPHye22ocOrd8xRnvk606QC5tcabgEXHgRyUOcAC4uDQN3HQAeJK8YZUyNtLFUy5rgsd2z3ZjcZQ657977Hqt7G8dqat3ZVGaHsw0SQZg27so78oabPadwNQFSa87V/6Ok/4j7TGKZ1M/PGGuppQ0e1m+1vryBaBderMXmnolwBlpK98VnOOSDo2NtgSxuwJI3GtivS2BWl7YavdZIiKVRRZSiCpx7hylrgG1EQfl9k3c0jbZzSDyWrjfCdNVUopMvZtYWuiczQxvbq1zetjyOh5roFi5R0OY4W4LgoCZA90srtO0fuGi+jWjujfz06KyxrGI6ZvN8hsGRMsXuP4eTepOgWrjGNvZIKWnYHykZnl1wyJh2c88ydbAa90rSw/DGxOLy50szrl8sli431IbyY242bYJ0vnN0wwWjkiY4ykGWR7pJct7Au1yNvyF7LfCwie1wzNII5EEEfELNS659CIiAiIgIiICIiAiJdBDgCCHAEEWIOxHRV9HWnDwIXtfLTHSJ7W5zC235OUblvIEA6A3WeL+sCMOprF7HBxjOgkjsczAToDsb35L64bXx1DM8Tsw0D2kEFhI9l7DZwPgRyRnqTXiMP4Pwp0jauGJriCXMLZXujDuoYHZL+WiscY4Yo6xwfPCHuGzgXNJtyJaRceBVDUUT6ZwqKTuZT9tB+iezdxa3Zj9AdLbELr6KsbMxkrDdr2hzTYi4I0396jqOfebmvpTwNY0NY0NAADQNAAOQX1CBSpVEREBERAWLlkoKDgZq59JNO2WlqXdpJnbJDBJO1zbd1h7Npy2ud7e0Vq1eNSTubSwZ45pLn7WCSPs42kB8pDwL2zNHvcvSLLksbw+aOrFdHGZm9i6GSMOa1zbua4PaTvsQRbW46I2zy2TplhdBHTQsgivkYLAncnm4+JW0q2GvqJBePD5T+OVkfxzBYyU+KP/AFdjByBla75go1zvP7VoQefyRU4pcTj7xp2PHRkoabf4ibr7U+OQOIY93Yyf3coMZP4c1s3ki3yz+VZIvhPWRMGZ80bRzLpGgBabsdid+QbJUHYdmxxZf/y2y/ND5RaIqoDEna+pZejfWIifisGYxJGctTSyxfeAMzfN0bbIn5Z/tboq2PiGiP63EOoc8NIPiDssKviOljHdlbO/82KE9o9x6ANvb3nREXUizcQNyjHtOzgVVf2Jik1numghvr2fZue5vgXB1ivqzhvEB+tQHx7F/wDqRE5MfqyG653iWj7EOxGHuyxgGZoNmzMJDbObsHAkEHTmrmPCMRAINTTk8j2L9v3lmzhh8hBqql0zQb9k1oZGT1OmY/FGeuWfiudQ4jMDEGtp2HQvkcHuy7ENyn2rHcgjQrrcNpBBDHC3aNrWC/Rot/BbPvWVkZa3dfaUREUEREBERAQoiCFFlkiDDKpsskQY2XwqaKKUWexrgeo/ithLIlV03DtJG7MyBoJ5kuP1JViyMDQAAeAAWalEMbI4XWSINc0kZ3Y3X7o/koho42eyxo8QBf4rZRBjZSpRBiQllkiCLKURAREQEREBERAREQEREBERAREQEREBERAREQEREBQpRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/9k=",
  // ]

  //   return (
  //     <div>
  //       <div className="Images" onClick={ toggleModal()}>
  //       {imageArray.map(item => (
  //         <img src={ item }/>
  //       ))}
  //         </div>
  //     </div>
  //   )
  // }

  
  function clickLeft() {
    let index = digimonList.indexOf(digimon)
    if (index > 0) setDigimon(digimonList[index - 1])
  }
  
  function clickRight() {
    let index = digimonList.indexOf(digimon)
    if (index < digimonList.length -1) setDigimon(digimonList[index + 1])
  }

  useEffect(() => {
    setDigimonList(list)
    setDigimon(digimonList[0])
  }, [])
  
  if (digimon) {
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
    )
  } else {
    return (
      <h1>loading...</h1>
    )
  }
}