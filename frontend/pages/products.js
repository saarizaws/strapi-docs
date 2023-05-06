/* eslint-disable linebreak-style */
import { headers } from "next/dist/client/components/headers";
import React from "react";
import axios from 'axios';

const products = ({ products, error }) => {

  console.log(products)
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
      {products.data.map(product => (
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <h1 key={product.id}>{product.attributes.media.id}</h1>
          {/* <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={product.attributes.media.attributes.name}/>
          </a> */}
          <div class="mt-4" key={product.id}>
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{product.attributes.category}</h3>
            <h2 class="text-white title-font text-lg font-medium">{product.attributes.title}</h2>
            <p class="mt-1">$18.40</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  </section>
  );
};

products.getInitialProps = async ctx => {
  try {
    const res = await axios.get("http://localhost:1337/api/products?populate=*", {
      headers: {
        'Authorization': `Bearer 5b4ab2da842ab95eef8dc532d8dcacebdf4ce52b303f6e3074a2409fd34d6056c47276a3bc74fa2cd1a0e1061e505387524d99249f4eec48ae8f26d302b5f4a9c7480f815d3c0a9dc60575b04a7d2fccd4e4f52fecabfa745cd9452d2f1c3104e33167241e3a9b3b946c1d3faea4c26653502701d631cf887b584663cfdc404e`
      }
    });
    const products = res.data;
    return { products };
  } catch (error) {
    return { error };
  }
};

export default products;
