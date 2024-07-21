import { useEffect, useState } from "react";
import icon from "./assets/shuffle.svg";
import dark from "/public/title.png";
import white from "./assets/titlewhite.png";

const MyComponent = () => {
  const [data, setData] = useState();
  const [darkMode, setDarkMode] = useState(true);
  function trigger() {
    setDarkMode(!darkMode)
  }


  const fetchData = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const result = await response.json();
      setData(result);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if(theme === 'dark'){
      setDarkMode(true)
    }
    fetchData();
  }, []);

  useEffect(() => {
    if(darkMode == true){
      document.documentElement.classList.add('dark')
      localStorage.getItem('theme','dark')
    }
    else  {
      document.documentElement.classList.remove('dark')     
     localStorage.setItem('theme','light')
    } 


  }, [darkMode]);


  const openDribble = () => {
    window.open('https://dribbble.com/hi_Rakesh', '_blank');
  };
  const openInstagram = () => {
    window.open('https://www.instagram.com/nirvanashrestha__/', '_blank');
  };
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/rakesh-shrestha-926ab3278/', '_blank');
  };

  return (
    <main className="min-h-screen bg-white flex flex-col justify-center items-center font-IBM text-text dark:bg-black dark:text-white">
     {darkMode ? (<img src={white} alt="logo"  className="absolute top-4 left-12 z-50 h-8 cursor-pointer"  onClick={fetchData}/>):
     (<img src={dark} alt="logo"  className="absolute top-4 left-12 z-50 h-8 cursor-pointer" onClick={fetchData} />)
     }
      <button onClick={trigger} className="absolute top-4 right-12 z-50 text-sm hover:font-bold">       
       {darkMode ? 'Light' : 'Dark' } 
      </button>
      <div className="bg-gray flex flex-col justify-center items-center  p-6 md:p-12 mx-8 md:mx-48 rounded-md dark:bg-darkGray">
        {data ? (
          <>
            <p className=" text-[17px] font-[401] md:font-normal md:text-2xl text-center">&quot;{data.content}&quot;</p>
            <p className=" text-[13px] md:text-base italic text-center mt-4">{data.author}</p>
          </>
        ) : (
          <p className="text-2xl">Loading...</p>
        )}
      </div>

      <button className="bg-green rounded-full p-3 md:p-4 mt-6 md:mt-8" onClick={fetchData}>
        <img src={icon} alt="shuffle quotes" className="w-6 md:w-8 h-6 md:h-8" />
      </button>

      <footer className="flex flex-col justify-center items-center md:flex-row md:justify-between w-full px-4 md:px-16 mt-4 md:mt-8 fixed bottom-4">
        <p className="text-[12px] md:text-base italic text-center font-IBM mb-2 md:mb-0">Rakesh Shrestha</p>
        <div className="font-IBM flex  md:flex-row gap-2 md:gap-4 mt-2 md:mt-0">
          <button className="hover:font-bold text-[12px] md:text-base" onClick={openDribble}>
            <p>Dribbble</p>
          </button>
          <button className="hover:font-bold text-[12px] md:text-base" onClick={openInstagram}>
            <p>Instagram</p>
          </button>
          <button className="hover:font-bold text-[12px] md:text-base" onClick={openLinkedIn}>
            <p>LinkedIn</p>
          </button>
        </div>
      </footer>
    </main>

  );
};

export default MyComponent;
