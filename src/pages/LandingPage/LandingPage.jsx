import React from "react";
import Card from "../../components/Card/Card";

const LandingPage = () => {
  return (
    <div className="container px-20">
      <div className="grid grid-cols-2 rounded-xl my-20 ">
        <div className="object-cover rounded-xl">
          <img
            className="object-cover h-96 w-full rounded-xl"
            src="https://img-global.cpcdn.com/recipes/985430a40e1760f3/1280x1280sq70/photo.webp"
            alt=""
          />
        </div>
        <div className="bg-sky-100 p-10 rounded-r-xl">
          <p className="font-semibold py-9">85% akan mencoba lagi</p>
          <h1 className="font-serif font-bold text-7xl">Sosis Blackpepper</h1>
        </div>
      </div>
      <div>
        <h1 className="font-serif font-semibold text-4xl my-12">Super Delicious</h1>
        <div className="grid grid-cols-3 gap-12">
          <div>
            <Card
              imgUrl={
                "https://img-global.cpcdn.com/recipes/3c827b7939088efe/1280x1280sq70/photo.webp"
              }
              recipeName={"Sop Sayur Kentang Wortel Kubis"}
            />
          </div>
          <div>
            <Card
              imgUrl={
                "https://img-global.cpcdn.com/recipes/c6f2990ce1a43811/1280x1280sq70/photo.webp"
              }
              recipeName={"Ayam Bakar Mejikom"}
            />
          </div>
          <div>
            <Card
              imgUrl={
                "https://img-global.cpcdn.com/recipes/155b67acf3055b3d/1280x1280sq70/photo.webp"
              }
              recipeName={"Pizza Teflon"}
            />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
