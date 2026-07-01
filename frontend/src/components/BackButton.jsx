import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-2 ml-3 cursor-pointer" onClick={() => navigate(-1)}>
      <IoArrowBackCircleSharp size={40} />
    </div>
  );
};

export default BackButton;
