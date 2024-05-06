import img from '../../assets/image/bhutan.jpg'


const Home = () => {
    return (
        <div>
           <p className="text-4xl text-blue-900 font-bold">Welcome to Explorista Travels</p>

           <img className='h-300px w-full mt-10' src={img} alt="" />
        
        </div>
    );
};

export default Home; 