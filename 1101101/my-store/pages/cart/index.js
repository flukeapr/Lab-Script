import React from 'react';
import useSWR from 'swr';
import Layout from '../../components/Layout';
import axios from 'axios';

async function fetchAPI(url){
    const res = await axios.get(url);
    const cart = res.data[0];
    const data =cart.products.map(async (product) => {
        const res = await axios.get(`https://fakestoreapi.com/products/${product.productId}`)
        const ProductDetails = {...res.data,...product};
        return ProductDetails
    });
    console.log(data);
    return await Promise.all(data);
}

export default function CartPage() {
    const {data, error} = useSWR('https://fakestoreapi.com/carts/user/2' ,fetchAPI);
    if(error) return <div>failed to load{error}</div>
    if(!data) return  <div className='flex justify-center m-10'>
    <button className="btn ">
  <span className="loading loading-spinner"></span>
  loading
</button>
    </div>
    
  return (
    <Layout>
      <div className='h-screen'>
        
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">sum</th>
    </tr>
  </thead>
  <tbody>
    
        {data.map((item)=>{
            return (
                <tr>
                    <th scope='row'>{item.title}</th>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price*item.quantity}</td>
                </tr>
            )
        })}
      
    
  </tbody>
</table>
      </div>
    </Layout>
  )
}
