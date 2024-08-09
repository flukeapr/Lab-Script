import React from "react";
import Link from "next/link";

export default function ProductCard(props) {
  return (
    <div className="grid grid-cols-4 gap-4 ">
    <div className="card w-96  shadow-xl bg-white my-2 ">
      
      <figure>
        <img
          src={props.image}
          alt={props.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <Link href={`/product/${props.id}`}>
          <button className="btn btn-primary">${props.price}</button>
          </Link>
          <button className="btn  btn-default btn-outline">Add To Cart</button>
        </div>
      
      
      </div>
    </div>
    </div>
  );
}
