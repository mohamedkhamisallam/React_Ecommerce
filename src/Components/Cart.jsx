import { FaTrash } from "react-icons/fa";

const Cart = ({cartItem,additem,removeItem,deleteItem}) => {
  return (
    <>
    
    
    <div><h2 className='cartItems mt-5 pt-5 text-center'>Cart Item</h2></div>

    {
      cartItem.length===0?<h1 className="bg-success text-center">No ITEMS ADDED</h1>:
      
        cartItem.map((ele,index)=>{
          return(
                       <div key={index}>
                       <div   className='cartItem overflow-hidden '>
        <div className='cart-img float-start  '>
          <img  className='w-100'  src={ele.image}/>
  
        </div>
        <div className='cartAction  float-end text-center'>
            <h6>{ele.title}</h6>
            <p> $ {ele.price} </p>
            <button   onClick={  ()=>additem(ele)} className='btn btn-outline-info me-2'>+</button>
            <span className='px-3'>{ele.qty} </span>
            <button onClick={()=>removeItem(ele)} className='btn btn-outline-danger'>-</button>
            <button   onClick={()=>deleteItem(ele)} className="btn btn-outline-danger ms-2"><FaTrash /></button>
        </div>
  
      </div>
      <hr/>
                       
                       </div>
          )
        })
      
    }
    
    
    {/* <div className='cartItem overflow-hidden '>
      <div className='cart-img float-start  '>
        <img  className='w-100'  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"/>

      </div>
      <div className='cartAction  float-end text-center'>
          <h6>men men men</h6>
          <p>777777777777</p>
          <button className='btn btn-outline-info me-2'>+</button>
          <span className='px-3'>3</span>
          <button className='btn btn-outline-danger'>-</button>
          <button className="btn btn-outline-danger ms-2"><FaTrash /></button>
      </div>

    </div>
    <hr/> */}
    
    
    
    
    </>
  )
}

export default Cart