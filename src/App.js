import './App.css';
import Data from "./data.json"
import Card from './Card';
import Header from './Header';
import img1 from './images/groups.jpg'
import img2 from './images/calculate.svg'
import img3 from './images/tips.svg'
import img4 from './images/person.svg'
function App() {
  const data=Data;
  return (
    <div className="Container">
      <Header/> 
      <div className="sub-container">
      {data.map((obj,idx)=>(
        (idx===0)? <Card className="card1" obj={obj} img={img1} key={idx} count={idx}/>:
        (idx===1)?<Card className="card2" obj={obj} img={img2} key={idx} count={idx} />:
        (idx===2)?<Card className="card3" obj={obj} img={img3} key={idx}count={idx} />:
          <Card className="card4" obj={obj} img={img4} key={idx}count={idx}/>
      ))}
       </div>

       
    </div>
  );
}

export default App;

