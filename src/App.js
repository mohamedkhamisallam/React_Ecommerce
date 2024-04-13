import "./App.css";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import NavBar from "./Components/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [cartItem, setcartItem] = useState([])
  const addToLocalStorage=(data)=>{
localStorage.setItem('token',JSON.stringify(data))
  }
  const addItem= (item) =>{
    let exist=cartItem.find((ele)=>{
      return ele.id===item.id
    })
          if(exist){



            let cart=cartItem.map((ele)=>{
              return(
                ele.id===exist.id?{...exist,qty:exist.qty+1}:ele
              )
            })
                 setcartItem(cart)
                 addToLocalStorage(cart) 
          }else{
            let cart=[...cartItem,{...item,qty:1}]
            setcartItem(cart)
            // setcartItem(prevItems=>[...prevItems, { ...item ,qty :1}]);
            addToLocalStorage(cart)
          }
    
  }
  const removeItem=(item)=>{
let find=cartItem.find((ele)=>{
  return(
    ele.id===item.id
  )
})
if(find.qty>1){
  let removeItem=cartItem.map((ele)=>{
    return(
      ele.id===item.id?{...ele,qty:ele.qty-1}:ele
    )
  })
  setcartItem(removeItem)
  addToLocalStorage(removeItem)
}else{
  setcartItem([])
}

  }

  const deleteItem=(item)=>{


    let cart=cartItem.filter((ele)=>{
      return(
        ele.id!==item.id
      )
    })
    setcartItem(cart)
    addToLocalStorage(cart)
  }


  const countItem=()=>{
    
          let count=cartItem.reduce( (accumulator , currentValue) => accumulator + currentValue.qty ,0);
          return count

  }




  const countPrice=()=>{
    let totalPrice=cartItem.reduce((accum,current)=>accum+current.qty*current.price,0)
    return totalPrice
      
    
  }
  useEffect(() => {
    countItem()
    countPrice()
  }, [addItem,removeItem,deleteItem])
  useEffect(() => {
    let data=JSON.parse(localStorage.getItem("token"))
    if(!data){
setcartItem([])
    }else{
      setcartItem(data)
    }
  }, [])
  
  
  return (
    <>
      <NavBar   countPrice={countPrice} countItem={countItem} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 ">
            <Products additem={addItem} />
          </div>
          <div className="col-md-3">
            <Cart    deleteItem={deleteItem}  removeItem={removeItem}  additem={addItem}  cartItem={cartItem} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
