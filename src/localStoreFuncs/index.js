// export const setInitial = () => {
//   localStorage.setItem("isAuth", "false");
//   localStorage.setItem("favorites", "[]");
//   localStorage.setItem("apiKey", "");
// };

export const getIsAuth = () => {
  if (localStorage.getItem("isAuth") === null)
    localStorage.setItem("isAuth", "false");
  return JSON.parse(localStorage.getItem("isAuth"));
};

export const getFavorites = () => {
  if (localStorage.getItem("favorites") === null)
    localStorage.setItem("favorites", "[]");
  return JSON.parse(localStorage.getItem("favorites"));
};

export const getApiKey = () => localStorage.getItem("apiKey");

export const addApiKey = apiKey => localStorage.setItem("apiKey", `${apiKey}`);

export const remApiKey = () => localStorage.setItem("apiKey", "");

export const logIn = () => {
  localStorage.setItem("isAuth", "true");
};

export const logOut = () => {
  localStorage.setItem("isAuth", "false");
};

export const addFav = id => {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  favorites.unshift(id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const remFav = id => {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  favorites = favorites.filter(v => v !== id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const clearFav = () => {
  localStorage.setItem("favorites", "[]");
};
