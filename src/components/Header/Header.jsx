import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const Header = () => {
  
  

  const { user } = useAuth();

  return (
    <nav className="w-full flex p-4">
      <div className="basis-1/4 px-4 flex justify-start items-center">
        <img src="img/logo.png" alt="" className="w-32" />
      </div>
      <div className="basis-2/4 flex justify-center items-center">
        <ul className="flex gap-7 font-semibold">
          <Link to="/">Beranda</Link>
          <Link to="/readRecipe">Resep</Link>
          <Link to="/kontribusi">Ayo Kontribusi!</Link>
        </ul>
      </div>
      <div className="basis-1/4 px-4 flex justify-end items-center">
        {user != null ? (
          <p>Masuk sebagai {user.email}</p>
        ) : (
          <Link to={"/login"}>
            <Button
              className="px-4 py-2 bg-orange-400 hover:bg-orange-500 rounded-md font-medium text-sm text-white"
              id={"loginBtn"}
              text={"Login"}
            />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
