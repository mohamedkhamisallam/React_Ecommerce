import React, { useEffect, useState } from 'react'
import axios from 'axios'
import allProducts from '../dataBase'
const Products = ({additem}) => {
    const [products, setProducts] = useState()

    const GetProducts=()=>{
        // let {data}=await axios.get('http://localhost:3000/Products')
        // if(data.message==='sucess'){
        //     setProducts(data.fileData)
        // }else{

        //     alert('wrong server')
        // }
        
 setProducts(allProducts.fileData)
    }

    useEffect(() => {
        GetProducts()
        

        
    }, [])
    
    
  return (
    <>
    <div className='row bg-secondary'>
    {
        products?
        products.map((ele)=>{
            return (
               
                    
                    <div  key={ele.id} className='col-md-4 ' >
                        <img className='w-100 my-2' height='320'   src={ele.image} alt='image'  />
                        <div className='cartTitle'>
                        <h6>{ele.title}</h6>
                        <span > $ {ele.price}</span><br/>
                        </div>
                       <div className=' d-flex justify-content-center '>
                       <button onClick={()=>additem(ele)} className='btn btn-outline-info mb-2'>ADD To Cart</button>
                       </div>                    
                </div>
                
        )
        })
        :<div className='text-center text-black m-5' ><h1>Loading...</h1></div>
    }

    </div>    
    </>
  )
}

export default  React.memo( Products)