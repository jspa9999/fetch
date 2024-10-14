import './App.css';
import {useState} from "react";
import {useEffect} from "react";




function App() {

 let [products , setProducts] = useState([]);
   
 

  let getProductsFromServer = async()=>{
     let reqOptions = {
      method: "GET",
        
       }
     let JSONData =  await fetch("https://fakestoreapi.com/products",reqOptions);

     

     let  JSOData =   await JSONData.json();

     setProducts(JSOData);
     console.log(JSOData);
  }

  useEffect (()=>{
    getProductsFromServer();
  },[])

  return (
    <div className="Products">
      <button type ="button" onClick = {()=>{
     getProductsFromServer();
      }}>Get Products</button>
      {products.map((element,i)=>{
        return <div className="productDiv"> 
          <img src = {element.image} className="Pic" title={element.description}></img>
        <h4>{element.title}</h4>
        <h4>Price:{element.price}</h4>
        </div>
    })}
    </div>
  );
}
export default App; 
