import { useNavigate } from "react-router-dom";
import "./Pages.scss";
import Button from "../utilities/Button";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="page">
      <h2 className="page__name">UNAUTHORIZED !!!</h2>
      <p className="page__message">
        You do not have access to the requested page.
      </p>
      <Button onClick={goBack}>Go Back</Button>
    </div>
  );
};

export default Unauthorized;
