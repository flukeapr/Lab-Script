import axios from "axios";
import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function ProductPage({ product }) {
  if (!product) {
    return <div>Loading...</div>;
  }
  const { image, title, description, price } = product;
  return (
    <Layout >
      
      <div className=" h-[calc(100vh-150px)]">
      <div className="card card-side bg-white shadow-xl my-5">
  <figure><img src={image} alt={title} className="w-1/3"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">${price}</button>
    </div>
  </div>
</div>
      </div>
    
      
      
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const res = await axios.get('https://fakestoreapi.com/products/' + id);
  const product = res.data;

  return {
    props: {
      product
    }
  };
}
