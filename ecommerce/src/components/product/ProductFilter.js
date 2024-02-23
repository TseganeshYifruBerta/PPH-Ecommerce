const ProductFiltering = () => {

  return (
    <div className="flex w-[350px]">
      <div className="max-lg:w-full overflow-y-scroll pb-10 inset-x-0 z-10 w-full my-4">
        <div className="bg-white rounded-lg justify-end px-2 py-4 text-lg min-h-full pl-6">
          <div>
            <h3 className="font-bold text-primary text-xl font-bold mb-6">
              Filter Products
            </h3>
          </div>
          <div className="text-gray-500">
            <div id="dropdown" class="z-10 w-56 p-3 rounded-lg shadow">
              <h6 class="mb-3 text-sm font-medium text-gray-900">Latest</h6>
              <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                <li class="flex items-center">
                  <input
                    id="apple"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600  focus:ring-2 "
                  />

                  <label
                    for="apple"
                    class="ml-2 text-sm font-medium text-gray-900"
                  >
                    recent
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="fitbit"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 "
                  />

                  <label
                    for="fitbit"
                    class="ml-2 text-sm font-medium text-gray-900 "
                  >
                    past 3 days
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 focus:ring-2 "
                  />

                  <label
                    for="dell"
                    class="ml-2 text-sm font-medium text-gray-900"
                  >
                    recent week
                  </label>
                </li>
              </ul>
            </div>

            <div id="dropdown" class="z-10 w-56 p-3 rounded-lg shadow">
              <h6 class="mb-3 text-sm font-medium text-gray-900">Price</h6>
              <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                <div className="flex">
                  <input
                    type="number"
                    placeholder="min"
                    className="w-[60px] m-1 border-gray-300 border-2 rounded-md p-1"
                  />{" "}
                  <span className=" m-1 p-1">-</span>{" "}
                  <input
                    type="number"
                    placeholder="max"
                    className="w-[60px] border-gray-300 border-2 rounded-md m-1 p-1"
                  />
                </div>
              </ul>
            </div>

            <div id="dropdown" class="z-10 w-56 p-3 rounded-lg shadow">
              <h6 class="mb-3 text-sm font-medium text-gray-900">Status</h6>
              <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                <li class="flex items-center">
                  <input
                    id="apple"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600  focus:ring-2 "
                  />

                  <label
                    for="apple"
                    class="ml-2 text-sm font-medium text-gray-900"
                  >
                    Used (88)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="fitbit"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 "
                  />

                  <label
                    for="fitbit"
                    class="ml-2 text-sm font-medium text-gray-900 "
                  >
                    New (56)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 focus:ring-2 "
                  />

                  <label
                    for="dell"
                    class="ml-2 text-sm font-medium text-gray-900"
                  >
                    With Delivery
                  </label>
                </li>
              </ul>
            </div>
            <div id="dropdown" class="z-10 w-56 p-3 rounded-lg shadow">
              <h6 class="mb-3 text-sm font-medium text-gray-900">Category</h6>
              <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                <li class="flex items-center">
                  <input
                    id="apple"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600  focus:ring-2 "
                  />

                  <label
                    for="apple"
                    class="ml-2 text-sm font-medium text-gray-900"
                  >
                    Apple (56)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="fitbit"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 "
                  />

                  <label
                    for="fitbit"
                    class="ml-2 text-sm font-medium text-gray-900 "
                  >
                    Fitbit (56)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="dell"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 focus:ring-2 "
                  />

                  <label
                    for="dell"
                    class="ml-2 text-sm font-medium text-gray-900"
                  >
                    Dell (56)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="asus"
                    type="checkbox"
                    value=""
                    checked
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 focus:ring-2"
                  />

                  <label
                    for="asus"
                    class="ml-2 text-sm font-medium text-gray-900"
                  >
                    Asus (97)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="logitech"
                    type="checkbox"
                    value=""
                    checked
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 focus:ring-2"
                  />

                  <label
                    for="logitech"
                    class="ml-2 text-sm font-medium text-gray-900"
                  >
                    Logitech (97)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="msi"
                    type="checkbox"
                    value=""
                    checked
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600  focus:ring-2 "
                  />

                  <label
                    for="msi"
                    class="ml-2 text-sm font-medium text-gray-900"
                  >
                    MSI (97)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="bosch"
                    type="checkbox"
                    value=""
                    checked
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 focus:ring-2 "
                  />

                  <label
                    for="bosch"
                    class="ml-2 text-sm font-medium text-gray-900"
                  >
                    Bosch (176)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="sony"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600  focus:ring-2 "
                  />

                  <label
                    for="sony"
                    class="ml-2 text-sm font-medium text-gray-900 "
                  >
                    Sony (234)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="samsung"
                    type="checkbox"
                    value=""
                    checked
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600  focus:ring-2 "
                  />

                  <label
                    for="samsung"
                    class="ml-2 text-sm font-medium text-gray-900 "
                  >
                    Samsung (76)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="canon"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600  focus:ring-2 "
                  />

                  <label
                    for="canon"
                    class="ml-2 text-sm font-medium text-gray-900 "
                  >
                    Canon (49)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="microsoft"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 focus:ring-2 "
                  />

                  <label
                    for="microsoft"
                    class="ml-2 text-sm font-medium text-gray-900 "
                  >
                    Microsoft (45)
                  </label>
                </li>

                <li class="flex items-center">
                  <input
                    id="razor"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600  focus:ring-2 "
                  />

                  <label
                    for="razor"
                    class="ml-2 text-sm font-medium text-gray-900 "
                  >
                    Razor (49)
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default ProductFiltering;
