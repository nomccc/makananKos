import React, { useEffect, useState } from "react";
import Card from "../../../components/Card/Card";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { getRecipe } from "../../../api/api";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";

const ReadRecipe = () => {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    setLoading(true);
    getRecipe()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((error) => console.log("error => ", error));
  }, []);

  const token = sessionStorage.getItem("token");

  return token ? (
    <Sidebar>
      <div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-14">
          {!loading ? (
            recipe.length > 0 ? (
              recipe.map((item, index) => (
                <div key={index}>
                  <Card recipeName={item.namaResep} imgUrl={item.gambarResep} />
                  <div className="flex justify-between gap-x-4">
                    <Link to={`/readRecipe/${item.id}`}>
                      <button className="bg-orange-500 px-2 py-2 rounded-md w-full text-sm text-white hover:bg-orange-400">
                        Detail
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <h2>Data Kosong</h2>
            )
          ) : (
            <span className="loading loading-dots loading-lg text-center mx-auto"></span>
          )}
        </div>
      </div>
    </Sidebar>
  ) : (
    <div>
      <div className="grid grid-cols-4 gap-x-8 gap-y-14 m-20">
        {!loading ? (
          recipe.length > 0 ? (
            recipe.map((item, index) => (
              <div key={index}>
                <Card recipeName={item.namaResep} imgUrl={item.gambarResep} />
                <div className="flex justify-between gap-x-4">
                  <Link to={`/readRecipe/${item.id}`}>
                    <button className="bg-orange-500 px-2 py-2 rounded-md w-full text-sm text-white hover:bg-orange-400">
                      Detail
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <h2>Data Kosong</h2>
          )
        ) : (
          <span className="loading loading-dots loading-lg text-center mx-auto"></span>
        )}
      </div>
    </div>
  );
};

export default ReadRecipe;
