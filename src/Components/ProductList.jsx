
const product = [
    {id: 1, title: "Laptop", price: 1500},
    {id: 2, title: "MacBook Air", price: 1200},
    {id: 3, title: "iphone 15", price: 2000},
    {id: 4, title: "AirPods", price: 300},
]


const ProductList = () => {
  return (
    <div>
        <h1>CHALLENGE 4</h1>
        {product.map((prod,index) => (<div key={index}> 
            {prod.id} {prod.title}: ${prod.price}
            {prod.price > 1000 ? <span> - Expensive</span> : <span> - Affordable</span>}
            
        </div>))}
    </div>
  )
}

export default ProductList