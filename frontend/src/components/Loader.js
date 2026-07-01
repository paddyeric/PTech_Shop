import { ProgressBar } from "react-loader-spinner";

const Loader = ({message}) => {
  return (
    <div>
      <ProgressBar
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
    {message}
    </div>
    
  );
};

export default Loader;
