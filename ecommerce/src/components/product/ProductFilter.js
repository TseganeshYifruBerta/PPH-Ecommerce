import React, { useState } from "react";
const ProductFiltering = () => {
  const [latest, setLatest] = useState(false);
  const [priceRange, setPriceRange] = useState(0);

  return (
    <div className="flex w-[350px]">
      <div className="max-lg:w-full overflow-y-scroll pb-10 inset-x-0 z-10 w-full my-4">
        <div className="bg-white rounded-lg justify-end px-2 py-4 text-lg min-h-full">
          <div>
            <h3 className="font-bold text-primary text-xl font-bold mb-6">
              Filter Products
            </h3>
          </div>
          <div className="text-gray-500">
            <div className="mb-2">
              <input
                type="checkbox"
                checked={latest}
                onClick={() => setLatest(!latest)}
              />
              <span className="pl-4">latest</span>
            </div>
            <div className="mb-2">
              <div htmlFor="priceRange">price range</div>
              <input
                type="range"
                id="priceRange"
                min="0"
                max="1000"
                step="10"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              />
              <span>{priceRange}</span>
            </div>
            <div className="mb-2">
              Status
              <div>
                <input
                  type="checkbox"
                  checked={latest}
                  onClick={() => setLatest(!latest)}
                />
                New
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={latest}
                  onClick={() => setLatest(!latest)}
                />
                Used
              </div>
            </div>
            <div className="mb-2">
              <div>
                <input
                  type="checkbox"
                  checked={latest}
                  onClick={() => setLatest(!latest)}
                />
                Delivery
              </div>
              Shipping
            </div>
            <div className="mb-2">Category</div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default ProductFiltering;
