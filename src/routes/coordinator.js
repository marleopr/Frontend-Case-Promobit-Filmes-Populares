export const goToDetailsPage = (navigate, id) => {
  navigate(`/details/${id}`);
}

export const goToSearchPage = (navigate) => {
  navigate("/search");
}

export const goToHomePage = (navigate) => {
  navigate("/");
}

export const goBack = (navigate) => {
  navigate(-1)
}