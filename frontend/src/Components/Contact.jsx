
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import axios from "axios";
import Lottie from "lottie-react";
import Cloud from '../Cloud.json'

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = state;

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      toast.error("All Fields are required", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    const nameRegex = /^[a-zA-Z\s]{3,30}$/;
    if (!nameRegex.test(name)) {
      toast.error(
        "Name should only contain alphabets and spaces (3-30 characters)",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid Email", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    const phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(phone)) {
      toast.error(
        "Phone number must be exactly 11 digits and contain only numbers",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
      return;
    }

    const messageRegex = /^[a-zA-Z0-9.,!?()'"-\s]{10,500}$/;
    if (!messageRegex.test(message)) {
      toast.error("Message must be between 10 and 500 characters", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    try {
      setIsLoading(true);
      // axios.defaults.withCredentials = true;
      const contact1 = { name, email, phone, message };
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/contactauth/contact`,
        contact1,
        // { withCredentials: true }
      );

      if (res?.status === 200) {
        setIsLoading(false);
        toast.success("Message send Successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setState(initialState);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("Network Error", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12 text-white" id="contact">
    
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 border-b-4 border-yellow-500 inline-block pb-2">
          Contact Us
        </h1>
       
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-2xl flex flex-col md:flex-row-reverse justify-center items-center">
        <div>
      <Lottie className="w-80 h-80" animationData={Cloud}/>
    </div>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              className="w-full h-12 px-4 text-lg rounded-md bg-gray-700 text-white border border-gray-500 focus:border-yellow-400 focus:ring focus:ring-yellow-400 transition-all"
              type="text"
              placeholder="Your Name"
              name="name"
              value={state.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full h-12 px-4 text-lg rounded-md bg-gray-700 text-white border border-gray-500 focus:border-yellow-400 focus:ring focus:ring-yellow-400 transition-all"
              type="email"
              placeholder="Your Email"
              name="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <input
              className="w-full h-12 px-4 text-lg rounded-md bg-gray-700 text-white border border-gray-500 focus:border-yellow-400 focus:ring focus:ring-yellow-400 transition-all md:col-span-2"
              type="tel"
              name="phone"
              value={state.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              required
            />
            <textarea
              className="w-full h-32 px-4 py-3 text-lg rounded-md bg-gray-700 text-white border border-gray-500 focus:border-yellow-400 focus:ring focus:ring-yellow-400 transition-all md:col-span-2"
              placeholder="Your Message"
              name="message"
              value={state.message}
              onChange={handleChange}
              required
            />
            {error && <h2 className="text-red-500">{error}</h2>}
            <button
              type="submit"
              className="w-full md:col-span-2 bg-yellow-500 text-black cursor-pointer text-lg font-bold py-3 rounded-md hover:bg-yellow-600 transition-all flex items-center justify-center"
            >
              {isLoading ? (
                'Sending...'
              ):('Send Message')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
