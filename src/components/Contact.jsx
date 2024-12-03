import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data)=>{
    const userInfo = {
      name:data.name,
      emial:data.email,
      message:data.message
    }
    try{
      await axios.post("https://getform.io/f/bejjorqa",userInfo);
      toast.success("Message Sent Succesfully")
    }
    catch(error)
    {
      toast.error(error)
    }
  }
  return (
    <>
      <div
        name="Contact Me"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-"
      >
        <h1 className="font-bold text-3xl mb-4">Contact Me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/bejjorqa"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
            // method="POST"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                id="name"
                placeholder="Enter your fullname"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.message && <span className="text-red-700">This field is required*</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.message && <span className="text-red-700">This field is required*</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                type="text"
                id="message"
                name="message"
                placeholder="Enter your Query"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.message && <span className="text-red-700">This field is required*</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
