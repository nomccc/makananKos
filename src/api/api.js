import axios from "axios";

const urlRecipe = import.meta.env.VITE_URL_RECIPE;

export const getRecipe = () => {
  return fetch(`${urlRecipe}/listRecipe`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getRecipeById = (id) => {
  return fetch(`${urlRecipe}/listRecipe/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const postRecipe = (data) => {
  axios
    .post(`${urlRecipe}/listRecipe`, {
      id: data.id,
      namaResep: data.namaResep,
      pembuatResep: data.pembuatResep,
      deskripsiResep: data.deskripsiResep,
      waktuResep: data.waktuResep,
      porsiResep: data.porsiResep,
      gambarResep: data.gambarResep,
      bahanResep: data.bahanResep,
      intruksiResep: data.intruksiResep,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteRecipe = (data) => {
  axios
    .delete(`${urlRecipe}/listRecipe/${data}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateRecipe = (id, data) => {
  axios
    .put(`${urlRecipe}/listRecipe/${id}`, {
      id: data.id,
      namaResep: data.namaResep,
      pembuatResep: data.pembuatResep,
      deskripsiResep: data.deskripsiResep,
      waktuResep: data.waktuResep,
      porsiResep: data.porsiResep,
      gambarResep: data.gambarResep,
      bahanResep: data.bahanResep,
      intruksiResep: data.intruksiResep,
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  };
