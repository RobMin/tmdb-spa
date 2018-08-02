export default {
  navBar: {
    position: "relative",
    zIndex: "11",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  logo: {
    height: "40px"
  },
  button: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    color: "white",
    padding: "0 10px 0 10px",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    "& a": {
      textDecoration: "none",
      color: "white"
    }
  },
  flexRow: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row"
  },
  input: {
    color: "white",
    textDecoration: "none",
    
  }
}
