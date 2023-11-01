import React from "react";

const Footer = () => {
  return (
    <footer className="h-64 bg-slate-50 px-20 py-14">
      <div className="grid grid-cols-4">
        <div className="col-span-2">
          <img src="/img/logo.png" alt="" width={300} />
        </div>
        <div>
          <p>MakananKos</p>
        </div>
        <div>
          <p>Follow</p>
        </div>
      </div>
      <div className="border-t-2 mt-14">
        <p className="py-3 text-sm text-gray-400">@ 2023 MakananKos - All Right Reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
