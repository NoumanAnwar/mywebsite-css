import React from 'react'

const products = () => {

const productsData = [
  {id:1, name:'Basmati Rice', price:1000, description:'1121 Steam Rice (Origin Punjab)', image:'/8.jpg'},
  {id:2, name:'Basmati Rice', price:950, description:'1121 Parboiled Rice (Origin Punjab)', image:'/8.jpg'},
  {id:3, name:'Basmati Rice', price:980, description:'Super Kernal Basmati Rice (Origin Punjab)', image:'/8.jpg'},
  {id:4, name:'Basmati Rice', price:850, description:'386 Basmati Rice (Origin Punjab)', image:'/2.jpg'},
  {id:5, name:'Non Basmati Rice', price:650, description:'Long Grain C-9 Rice (Origin Sindh)', image:'/2.jpg'},
  {id:6, name:'Non Basmati Rice', price:530, description:'Long Grain IRRI-6 Rice (Origin Sindh)', image:'/2.jpg'},
]
  return (
    <div>
      <div className='products'>
        {productsData.map((product)=>(
        <div key={product.id} className='product-card'>
        <img src={product.image} alt={product.name}/>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className='price'>${product.price} </div>
        <button>Add to Cart</button>
        </div>

        ))}
      </div>
    </div>
  )
}

export default products
