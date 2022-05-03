import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

document.addEventListener("keyup", function (event) {
  //  console.log(event)
  if (event.key === "Enter") {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name === "" || email === "" || message === "") {
      Swal.fire({
        title: "Ups!",
        text: "You must complete all the fields",
        icon: "error",
        confirmButtonText: "Cool",
        confirmButtonColor: "#0891B2",
      });
    } else {
      document.getElementById("submit").click();
    }
  }
});

export default function Form() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "josecentenodev",
        "template_dg8t2gv",
        form.current,
        "VGszzKsze4BXPY-T2"
      )
      .then(
        (result) => {
          // console.log(result.text);
          Toast.fire({
            icon: result.text,
            title: "Message sent in successfully",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col lg:w-96">
      <input
        name="user_name"
        id="name"
        placeholder="Name"
        type="text"
        className="my-5 border-b-slate-800 border-b-2 bg-gray-50 outline-none focus:border-b-cyan-600 dark:bg-slate-700"
      />
      <input
        name="user_email"
        id="email"
        placeholder="Email"
        type="email"
        className="my-5 border-b-slate-800 border-b-2 bg-gray-50 outline-none focus:border-b-cyan-600 dark:bg-slate-700"
      />
      <textarea
        name="message"
        id="message"
        placeholder="Write a message & press Enter to send"
        cols="40"
        rows="8"
        className="border-b-slate-800 border-b-2 bg-gray-50 outline-none focus:border-b-cyan-600 dark:bg-slate-700"
      ></textarea>
      <input type="submit" name="submit" id="submit" className="mt-5 w-24 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-300 hover:text-slate-700"/>
    </form>
  );
}
