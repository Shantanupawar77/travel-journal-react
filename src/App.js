import logo from './logo.svg';
import './App.css';
import Card from "./components/Card.js"
import Data from "./data.js"

function App() {
  const cards=Data.map((item)=>{
    return (
      <Card 
        location={item.location}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
        googleMapsUrl={item.googleMapsUrl}
      />
    )
  })
  return (
    <div className="App">
      <nav>
        My Travel Journal.
      </nav>
      {cards}
    </div>
  );
}

export default App;
