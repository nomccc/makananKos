import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { IoArrowBackOutline } from "react-icons/io5";
import { deleteRecipe, getRecipe } from "../../../api/api";
import { toast } from "react-toastify";

const DetailRecipe = () => {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState([]);

  const navigate = useNavigate()

  const notifySuccess = () =>
  toast.success("Hapus resep berhasil!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  // narik params
  const pull = useParams();
  const id = pull.id;

  const fetchData = (id) => {
    return recipe.filter(recipe => recipe.id == id)
  }

  // inisialisasi location buat tarik data dari state
  const location = useLocation();

  const parseData = (dataParam) => {
    const data = dataParam;
    return parse(String(data));
  };

  const hapusData = (id) => {
    deleteRecipe(id)
  }

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

  
  const token = sessionStorage.getItem('token')


  return (
    <div className="container">
      <div className="m-16">
        <div className="flex flex-row items-center  gap-2 hover:text-orange-500 hover:font-semibold py-2 my-5">
          <span className="">
            <IoArrowBackOutline />
          </span>
          <Link to={"/readRecipe"}>Kembali ke halaman resep</Link>
        </div>
        {!loading ? (
          recipe.length > 0 ? (
            <div>
              {token != null ? (
              <div className="text-center flex justify-end ">
                <Link to={`/updateRecipe/${id}`}>
                <button className="bg-yellow-400 px-4 py-2 rounded-md mx-5 text-white hover:bg-orange-400">
                  Edit
                </button>
                </Link>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn-error px-4 py-2 rounded-md mx-5 text-white hover:bg-orange-400"
                  onClick={() =>
                    document.getElementById("deleteRecipeBtn").showModal()
                  }
                >
                  Delete
                </button>
                <dialog
                  id="deleteRecipeBtn"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">
                      Apakah kamu yakin menghapus resep{" "}
                      {fetchData(id)[0].namaResep} ?
                    </h3>

                    <div className="modal-action">
                      <form method="dialog ">
                        {/* if there is a button in form, it will close the modal */}
                        <button
                          className="btn mx-4 bg-red-600 text-white hover:bg-red-800"
                        onClick={(e) => {
                          hapusData(id)
                          navigate('/readRecipe')
                          notifySuccess()
                        }}
                        >
                          Hapus
                        </button>
                        <button className="btn">Batal</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
              ) : (
                <div></div>
              )}
              <article>
                <h1 className="font-bold text-7xl">
                  {fetchData(id)[0].namaResep}
                  {/* {fetchData(id)[0].namaResep} */}
                </h1>
                <h3 className="my-3 font-semibold text-lg text-slate-500">
                  Resep oleh: {fetchData(id)[0].pembuatResep}
                </h3>
                <p className="py-3">
                  {fetchData(id)[0].deskripsiResep}
                </p>
                <img
                  className="w-full h-96 object-cover rounded-xl"
                  src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/1.jpg"
                  alt=""
                />
              </article>
              <div className="flex flex-row gap-x-16 py-5">
                <div className="">
                  <p className="text-slate-600 font-semibold">
                    WAKTU PEMBUATAN
                  </p>
                  <p className="text-xl">
                    {fetchData(id)[0].waktuResep}
                  </p>
                </div>
                <div className="border-x-2 px-10">
                  <p className="text-slate-600 font-semibold">PORSI</p>
                  <p className="text-xl">
                    {fetchData(id)[0].porsiResep}
                  </p>
                </div>
              </div>
              <div className=" my-10  flex px-16  ">
                <div className="flex-1">
                  <h1 className="font-bold text-4xl my-4">Bahan-Bahan</h1>
                  {parseData(fetchData(id)[0].bahanResep)}
                </div>
                <div className="flex-1">
                  <h1 className="font-bold text-4xl my-4">
                    Intruksi Pembuatan
                  </h1>
                  {parseData(fetchData(id)[0].intruksiResep)}
                </div>
              </div>
            </div>
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

export default DetailRecipe;
