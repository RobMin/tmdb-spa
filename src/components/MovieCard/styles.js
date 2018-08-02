export default {
  card: {
    position: "relative",
    width: "200px",
    height: "300px",
    margin: "70px 30px 0 60px",
    "&:hover": {
      "& div": {
        backgroundColor: "rgba(100, 100, 100, 0.65)"
      }
    },
    boxShadow: "1px 1px 4px 1px"
  },
  cardImage: {
    position: "relative",
    zIndex: "2"
  },
  cardBottom: {
    padding: "10px 6px 0 10px",
    width: "184px",
    backgroundColor: "rgba(100, 100, 100, 0.2)",
    fontWeight: "600",
    position: "absolute",
    zIndex: "10",
    bottom: "0",
    textAlign: "center",
    color: "#ebebeb"
  }
};
