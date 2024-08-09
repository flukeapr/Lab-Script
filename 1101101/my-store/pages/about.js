import React from "react";
import Layout from "../components/Layout";

export default function about() {
  return (
    <Layout>
      <div className="h-screen ">
        <div className="flex justify-center w-full py-2 my-2">
          <div className="btn btn-secondary text-white text-lg w-1/4"><h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white font-bold">this is My store</h1></div>
        </div>
       
        <div className="flex ">
          <img src="image-store.png" width="50%" height="50%"></img>
          <img src="wallet.png" width="50%" height="auto"></img>
        </div>
      </div>
    </Layout>
  );
}
