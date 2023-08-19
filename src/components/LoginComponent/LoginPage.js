import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  let navigate = useNavigate();
  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
    role: "",
  });
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };
  console.log("loginRequest", loginRequest);

  const loginAction = (e) => {
    e.preventDefault();
    if (!loginRequest.emailId || !loginRequest.password) {
      setLoginError(true);
      return;
    } else if (!loginRequest.role) {
      setLoginError(true);
      setErrorMessage("Please select one of the role");
      return;
    }

    fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    })
      .then((result) => {
        console.log("result", result);
        if (result.ok) {
          return result.json();
        } else {
          throw new Error("Invalid email or password ");
        }
      })
      .then((res) => {
        console.log(res);

        if (res.role === "Admin") {
          sessionStorage.setItem("active-admin", JSON.stringify(res));
        } else if (res.role === "Customer") {
          sessionStorage.setItem("active-customer", JSON.stringify(res));
        } else if (res.role === "Hotel Manager") {
          sessionStorage.setItem("active-hotelManager", JSON.stringify(res));
        }

        navigate("/home");
        window.location.reload(true);
      })
      .catch((error) => {
        setLoginError(true);

        setErrorMessage("Invalid email or password. Please try again.");
        console.log("The Login Error is: ", error);
      });
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 bg-login font-euclidRegular ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex justify-center text-center">
            {" "}
            <a
              href="/"
              className="flex items-center pl-2 mb-6 text-3xl font-extrabold text-gray-100 dark:text-white">
              Welcome to Royal Sky Hotels
            </a>
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800/70 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="mb-3 text-color">
                  <label
                    htmlFor="role"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <b>User Role</b>
                  </label>
                  <select
                    onChange={handleUserInput}
                    className="px-3 py-1 border-2 border-gray-900 rounded-full form-control"
                    name="role">
                    <option value="0">Select Role</option>
                    <option value="Admin"> Admin </option>
                    <option value="Customer"> Customer </option>
                    <option value="Hotel Manager"> Hotel Manager </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    onChange={handleUserInput}
                    value={loginRequest.emailId}
                    name="emailId"
                    id="emailId"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleUserInput}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  onClick={loginAction}
                  className="w-full text-gray-900 bg-emerald-300 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Sign in
                </button>
                {loginError && (
                  <div className="relative px-4 py-1 mt-2 text-red-500 border border-red-400 rounded-xl">
                    <span className="block text-sm font-semibold sm:inline">
                      {errorMessage}
                    </span>
                    <span className="absolute right-0 pr-2 ">
                      <svg
                        className="w-6 h-6 text-red-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8a1 1 0 112 0v2a1 1 0 11-2 0v-2zm1-5a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                )}

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="/user/register"
                    className="font-medium text-emerald-600 -600 hover:underline dark:text-primary-500">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
