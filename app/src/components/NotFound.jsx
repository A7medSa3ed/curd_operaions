import notfound from "../Assets/images/NotFound.jpg";

const NotFound = () => {
  return (
    <img
      src={notfound}
      style={{ width: "30%", margin: "80px 0 0 35%" }}
      alt="notFound"
    />
  );
};

export default NotFound;
