import React from "react";
import ComingSoon from "../components/ComingSoon";


const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col p-10">
      <h2 className="text-3xl font-bold mb-2 uppercase tracking-wider gradient-text">
        Hire Me!
      </h2>
      <form className="text-xl min-w-[550px] p-4 space-y-4">
        <div className="">
          <label htmlFor="name">Name / Company Name</label> <br />
          <input
            type="text"
            name="name"
            className="p-3 w-full px-4 rounded-sm focus:outline"
            style={{ background: "rgba(169, 169, 169, 0.2)" }}
          />
        </div>
        <div className="">
          <label htmlFor="">Email</label> <br />
          <input
            type="email"
            name="email"
            className="p-3 w-full px-4 rounded-sm focus:outline"
            style={{ background: "rgba(169, 169, 169, 0.2)" }}
          />
        </div>
        <div className="">
          <label htmlFor="">Location</label> <br />
          <input
            type="address"
            name="address"
            className="p-3 w-full px-4 rounded-sm focus:outline"
            style={{ background: "rgba(169, 169, 169, 0.2)" }}
          />
        </div>{" "}
        <div className="">
          <label htmlFor="">Scope Of Work</label> <br />
          <input
            type="text"
            className="p-3 w-full px-4 rounded-sm focus:outline"
            style={{ background: "rgba(169, 169, 169, 0.2)" }}
          />
        </div>{" "}
        <div className="">
          <label htmlFor="">Message</label> <br />
          <textarea
            cols={10}
            rows={6}
            className="p-3 w-full px-4 rounded-sm focus:outline"
            style={{ background: "rgba(169, 169, 169, 0.2)" }}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
