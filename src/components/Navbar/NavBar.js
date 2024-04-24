import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import img from '../../images/logo.png';



// const logoimage = {
//     height: '10rem',
//     width: 'auto',
//     mixBlendMode: 'colorBurn'
// }

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = React.useState(false);
    function handleClick() {
        setisOpen(!isOpen);
    }


    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className={`fixed top-0 w-full sm:h-24 md:h-30 lg:h-36 xl:h-40 z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
            <div className="flex flex-row justify-between items-center py-2">
            <div className="flex flex-row justify-center md:px-12 md:mx-12 sm:mx-12 items-center text-center font-semibold">
                <HashLink smooth to="/#hero">
                    
                <div className="overflow-hidden flex content-center mb-8 justify-center transition-all ease-in-out mt-2 ml-2">
                    <img src={img} alt="logo" className='xxs:w-[25px] xxs:h-[25px] xs:w-[45px] xs:h-[45px] sm:w-[65px] sm:h-[65px] md:w-[75px] md:h-[75px] lg:w-[95px] lg:h-[95px] xl:w-[115px] xl:h-[115px]'/>                            
                </div>
                    

                   {/* <h1 className="font-bold ml-10 sm:max-lg:ml-0 text-base xs:text-sm sm:text-md md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl text-blue-900">al-Baraka IT Solutions</h1> */}
                </HashLink> 
            </div>
                <div className="group flex flex-col items-center">
                    <button className="p-2 mt-0 rounded-lg lg:hidden text-blue-900" onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen && (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            )}
                            {!isOpen && (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className='hidden space-x-6 lg:inline-block p-5'>
                        <NavLinks />
                    </div>

                    <div className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${  isOpen ? "block" : "hidden" } `}>
                        <div className='flex flex-col space-y-6'>
                            <NavLinks />
                        </div>                                                
                    </div>

                </div>
            </div>
        </nav>
    )
    
}


export default NavBar;
