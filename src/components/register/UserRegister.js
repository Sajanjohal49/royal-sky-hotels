import React from "react";

const UserRegister = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 bg-luggage ">
      <div class=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <div className="flex justify-center text-center ">
          {" "}
          <a
            href="/"
            class="flex pl-2 items-center mb-6 text-lg md:text-3xl font-extrabold text-gray-100 dark:text-white">
            Welcome to{" "}
            <span className="px-3 py-1 mx-2 bg-green-600 rounded-lg text-slate-50">
              Royal Sky Hotels
            </span>
          </a>
        </div>
        <div class=" bg-white lg:min-w-[800px] min-w-full   rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800/70 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Please Register Here!
            </h1>
            <form class="space-y-4 md:space-y-6  " action="#">
              <div className="grid gap-3 md:grid-cols-2 ">
                <div>
                  <label
                    for="firstName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="First Name"
                    id="firstName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="First Name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="lastName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="lastName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <div>
                  <label
                    for="contact"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Contact
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    id="contact"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Contact"
                    required
                  />
                </div>
                <div>
                  <label
                    for="street"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    id="street"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Street"
                    required
                  />
                </div>

                <div>
                  <label
                    for="city"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="City"
                    required
                  />
                </div>

                <div>
                  <label
                    for="postalCode"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postal_code"
                    id="postalCode"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Postal Code"
                    required
                  />
                </div>

                <div>
                  <label
                    for="gender"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required>
                    <option value="" disabled selected>
                      Select your gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    for="age"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Age"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                class="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRegister;
