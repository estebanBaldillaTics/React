import './App.css';
import Testimonio from './Components/Testimonio';
import testimonialsData from './Components/testimonialsData';



function App() {
  return (
    <div className="App">
      <h1 className="title-testimony">Here is what our alumni say about freeCodeCamp:</h1>
      {testimonialsData.map((item) => (
        <Testimonio
          image ={item.image}
          name={item.name}
          country={item.country}
          job={item.job}
          company={item.company}
          testimony={item.testimony}/> 
      ))}
    </div>
  );
}

export default App;
