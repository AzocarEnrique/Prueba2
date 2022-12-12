import {useState, useEffect} from "react";

function App() {
    const [data, setData] = useState(null)

    useEffect(() => {
        getData();
    }, [])

  const getData = async () => {
      try {
        const request = await fetch('https://dummyjson.com/products');
        const response = await request.json();
        console.log(response.products)
        setData(response.products);
      } catch (error) {
          console.error(error)
      }
  }
  return (
    <div>
      <h1>Pokemon List</h1>
      <div >
          {data && data.map((item) => (
              <div className="algo">
                <li key={item.title} className="items">
                  <p key={item.title+"title"}>{item.title}
                  </p>
                  </li> 
                  <li key={item.title} className="items">
                  <p key={item.title+"description"}>{item.description}
                  </p>
                  </li> 
                  <li key={item.title} className="items">
                  <p key={item.title+"price"}>{item.price}
                  </p>
                  </li> 
                  
                  
                
                <img src={item.thumbnail}></img>
                </div>
          ))}
      </div>
    </div>
      
  );
}
export default App;