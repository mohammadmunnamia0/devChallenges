import { HashLoader } from "react-spinners";


const LoadingSpinner = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-[calc(100vh-120px)]'>
            <HashLoader size={100} color='#FF4500'></HashLoader>
        </div>
    );
};

export default LoadingSpinner;