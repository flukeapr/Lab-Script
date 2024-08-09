import React from 'react';
import useSWR from 'swr';
import Layout from '../../../components/Layout';
import axios from 'axios';
import { useRouter } from 'next/router';

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
    const router = useRouter();
    
    const {data, error} = useSWR('https://fakestoreapi.com/carts/user/'+router.query.userid ,fetchAPI);
    if(error) return <Layout>failed to load{error}</Layout>
    if(!data) return <Layout>
     <div className='flex justify-center m-10'>
      <button className="btn ">
    <span className="loading loading-spinner"></span>
    loading
  </button>
      </div></Layout>
    
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
