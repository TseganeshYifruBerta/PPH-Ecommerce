// implement the product card which contains product name, product price, product image, and a button to add the product to the cart
// i want to pass it as props to the product card component

const ProductCard = () => {
  return (
    <div class="sm:w-1/4 w-1/3 bg-white border border-gray-200 rounded-lg shadow m-2">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT613ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-trail-ultra2_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507270905"
          alt="product image"
        />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class=" font-semibold tracking-tight text-gray-900">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            5.0
          </span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-2xl font-bold text-gray-900 w-1/3">$599</span>
       
        </div>
      </div>
    </div>
    // <div class="m-2 relative flex max-w-[12rem] w-1/4 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    //   <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
    //     <img
    //       src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT613ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-trail-ultra2_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507270905"
    //       alt="watch"
    //     />
    //   </div>
    //   <div class="p-6">
    //     <h4 class="block font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    //       Watch Iphone
    //     </h4>
    //     <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700"></p>
    //   </div>
    //   <div class="flex items-center justify-between p-6">
    //     <div class="flex items-center -space-x-3 justify-end">
    //       <button className="px-4 w-full bg-primary rounded-lg py-1 justify-end hover:bg-green-700">
    //         + Cart
    //       </button>
    //     </div>
    //     {/* <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
    //       January 10
    //     </p> */}
    //   </div>
    // </div>
  );
};

export default ProductCard;
