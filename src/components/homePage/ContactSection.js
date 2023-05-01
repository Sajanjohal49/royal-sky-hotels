import React from "react";
import address from "../svg/Address.svg";

import phone from "../svg/Ringer Volume.svg";

const ContactSection = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="px-4 py-8 lg:py-16">
          <div className="mx-auto">
            {" "}
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-emerald-600 dark:text-white">
              Contact Us
            </h2>
            <p className="mb-8 font-light text-center text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan?
              <span className=" text-emerald-600"> Let us know.</span>
            </p>
          </div>
          <div className="flex flex-wrap">
            <form action="#" className="max-w-3xl mx-10 space-y-8 ">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label
                    for="LastName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."></textarea>
              </div>
              <div>
                <p className="text-xs dark:text-gray-400">
                  By submitting this form you agree to our{" "}
                  <span className="pr-1 text-emerald-600">
                    terms and conditions
                  </span>
                  and our{" "}
                  <span className="pr-1 text-emerald-600">privacy policy</span>
                  which explains how we may collect, use and disclose your
                  personal information including to third parties.
                </p>
              </div>
              <button
                type="submit"
                className="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-emerald-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Send message
              </button>
            </form>
            <div className="grid justify-center max-w-sm mx-auto dark:text-gray-200 sm:max-w-md lg:max-w-xl">
              <div className="items-center text-center">
                <img src={address} className="w-12 h-12 mx-auto" alt="" />
                <h1 className="text-xl font-semibold">Address:</h1>
                <p className="pt-3 text-sm ">Mississauga,Ontario,Canada</p>
                <p className="text-sm pt-1.5 ">Postal Code: L4T XXX</p>
              </div>
              <div className="items-center text-center ">
                <img src={phone} className="w-12 h-12 mx-auto " alt="" />
                <h1 className="text-xl font-semibold">Call us:</h1>
                <p className="max-w-sm px-4 pt-3 text-sm ">
                  Call us to speak to a member of our team. We are always happy
                  to help.
                </p>
                <p className="pt-1.5 text-sm text-emerald-400">
                  +(646) XXXXXXXXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
