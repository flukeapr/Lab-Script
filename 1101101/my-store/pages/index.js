import React,{ useState,useEffect } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import '../app/globals.css';


import {getProducts }  from './Products'




export default function Page(props) {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const productsData = await getProducts();
      setProducts(productsData);
    }
    fetchProducts();
  }, []);
if(!products){
  return <button className="btn">
  <span className="loading loading-spinner"></span>
  loading
</button>
}

  return (
    <> 
        <Layout >

      <div class="m-3  flex justify-center">
        <input class="input input-bordered w-full max-w-md bg-white mx-2 " type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <button className="btn btn-outline btn-success">Search</button>
      </div>
    <div className=''>
      <div className='grid grid-cols-4 gap-12'>
       
       {products.filter((prod)=>{
     if(search==""){
       return prod
     }else if(prod.title.toLowerCase().includes(search.toLowerCase())){
       return prod
     }}).map((prod)=>{return(<ProductCard name={prod.title} image={prod.image} id={prod.id} price={prod.price}></ProductCard>)})}
       </div>
      </div>
      
  
 
  {/* {props.products.map((prod)=><ProductCard name={prod.title} image={prod.image} id={prod.id}></ProductCard>)}*/}
  
 

    </Layout>
    



    </>
    
    
    
  )
  
}

// export async function getStaticProps() {
//   const res = await axios.get('https://fakestoreapi.com/products')
//   const products = await res.data;
  
//   return { props: { products } }

// }

