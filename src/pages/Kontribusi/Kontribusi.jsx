import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

const Kontribusi = () => {
  const form = useRef();

  const notifySuccess = () =>
    toast.success("Buat resep berhasil!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    

  const sendEmail = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);


    e.preventDefault();
    if (
      isi.nama === "" ||
      isi.nama == null ||
      isi.email === "" ||
      isi.email == null ||
      isi.gambar === "" ||
      isi.gambar == null ||
      isi.resep === "" ||
      isi.resep == null
    ) {
      e.preventDefault();
    } else {
      emailjs
        .sendForm(
          `${import.meta.env.VITE_SERVICE_ID_EMAILJS}`,
          `${import.meta.env.VITE_TEMPLATE_ID_EMAILJS}`,
          form.current,
          `${import.meta.env.VITE_PUBLIC_KEY_EMAILJS}`
        )
        .then(
          (result) => {
            console.log(result.text);
            // console.log("berhasil");
            notifySuccess();
          },
          (error) => {
            console.log(error.text);
            // console.log("gagal");
          }
        );
    }
  };

  const [isi, setIsi] = useState({
    nama: "",
    email: "",
    gambar: "",
    resep: "",
  });

  const [error, setError] = useState({
    nama: "",
    email: "",
    gambar: "",
    resep: "",
  });

  return (
    <div className="m-10">
      <div className="text-center">
        <h1 className="font-bold text-orange-400 text-6xl">
          Kontribusikan Resep Kamu!
        </h1>
      </div>
      <div className="mx-auto w-3/4  py-5">
        <p className="text-lg">
          Yuk, jadikan website ini semakin spesial dengan kontribusi resep-resep
          favoritmu selama di kos! Ajak teman-teman kos lainnya untuk berbagi
          kreasi kuliner mereka. Dengan bergabung, kita bisa menciptakan
          komunitas makanan kos yang lebih lezat dan berwarna. Ayo, bagikan
          resepmu sekarang! 🍽️😃
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="rounded w-1/2 mx-auto">
        <div className="my-16">
          <Input
            type="text"
            text="Nama"
            id="user_name"
            name="user_name"
            placeholder="Budi"
            classname="border-2 rounded-lg px-4 py-1"
            onChange={(e) => {
              setIsi((old) => {
                return {
                  ...old,
                  nama: e.target.value,
                };
              });
            }}
          />
          <Input
            type="email"
            text="Email"
            id="user_email"
            name="user_email"
            placeholder="budi@gmail.com"
            classname="border-2 rounded-lg px-4 py-1"
            onChange={(e) => {
              setIsi((old) => {
                return {
                  ...old,
                  email: e.target.value,
                };
              });
            }}
          />
          <div className="flex flex-col my-4 gap-y-2">
            <label htmlFor="message" className="text-lg font-semibold ">
              Masukkan resep kamu
            </label>
            <textarea
            className="border-2"
              name="message"
              id="message"
              cols="30"
              rows="5"
              onChange={(value) => {
                console.log(value);
                setIsi((prev) => {
                  return {
                    ...prev,
                    resep: value,
                  };
                });
              }}
            ></textarea>
            {/* <ReactQuill
              className="my-2"
              id="message"
              theme="snow"
              name="message"
              value={isi.resep}
              onChange={(value) => {
                console.log(value)
                setIsi((prev) => {
                  return {
                    ...prev,
                    resep: value,
                  };
                });
              }}
            /> */}
            <p className="text-gray-400">
              <span className="text-red-400">* </span>Resep terdiri dari nama
              resep, deskripsi singkat terkait resep, waktu pembuatan, porsi
              dari resep, bahan resep, dan intruksi resep
            </p>
          </div>
          <Input
            name="user_image"
            text="Gambar Resep"
            id="user_image"
            classname="mb-8"
            type="file"
            onChange={(e) => {
              console.log(e.target.value);
              const file = e.target.files[0];
              if (file.size > 50) {
                setError((old) => {
                  return {
                    ...old,
                    gambar: "Ukuran foto maksimal 50kb",
                  };
                });
              } else {
                setError((old) => {
                  return {
                    ...old,
                    gambar: "",
                  };
                });
              }

              if (
                file &&
                (file.type === "image/jpeg" || file.type === "image/png")
              ) {
                setIsi((old) => {
                  console.log(file);
                  return {
                    ...old,
                    gambar: URL.createObjectURL(e.target.files[0]),
                  };
                });
              } else {
                setError({
                  ...error,
                  gambar: "Please choose a JPG or PNG file",
                });
              }
            }}
          />
          <h1 className="text-red-600 mb-10">{error.gambar}</h1>
          <button className="text-center p-3 rounded-lg mx-auto bg-orange-500 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Kontribusi;
