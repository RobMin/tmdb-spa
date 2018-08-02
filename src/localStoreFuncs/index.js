export const setInitial = () => {
  localStorage.setItem("isAuth", "false");
  localStorage.setItem("favorites", "[]");
};

export const getIsAuth = () => JSON.parse(localStorage.getItem("isAuth"));

export const getFavorites = () => JSON.parse(localStorage.getItem("favorites"));

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
