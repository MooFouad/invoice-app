import { useState } from 'react'
import logoImg from '../assets/logo.png'
import moonIcon from '../assets/icon-moon.svg'
import sunIcon from '../assets/icon-sun.svg'
import profileImg from '../assets/image-avatar.jpg'
import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {
    const [colorTheme, setTheme] =useDarkMode()
    const [darkTheme, setDarkTheme]= useState(
        colorTheme === 'light' ? true : false
    )

    const handleToggle = ()=>{
        setTheme(colorTheme)
        setDarkTheme(state => !state)
    }


    return (
        <>
        <nav className='z-10 lg:hidden bg-slate-800 flex justify-between items-center '>
            {/* navbar logo */}
            <img src={logoImg} alt="logo" className='md:w-[70px] max-md:w-[50px]md:h-[70px] max-md:h-[50px]' />
            {/* dark-mode btn & img container */}
            <div className="flex items-center justify-center gap-4">
                {
                    colorTheme === 'light' ?
                    <img
                    onClick={handleToggle}
                    className='cursor-pointer'
                    src={moonIcon} alt="moon-icon"
                    />
                    :
                    <img
                    onClick={handleToggle}
                    className='cursor-pointer'
                    src={sunIcon} alt="moon-icon"  />
                }
                
                {/* border between icon & img */}
                <div className='md:w-[70px] max-md:w-[50px]md:h-[70px] max-md:h-[50px] border border-gray-500'></div>
                {/* profile img */}
                <div className="">
                    <img src={profileImg}
                    className='md:w-[50px] max-md:w-[30px]md:h-[50px] max-md:h-[30px] rounded-full mr-4'
                    alt="profile-img" />
                </div>
            </div>
        </nav>
        {/* sidebar */}
        <div className="max-lg:hidden ">
            <div className="rounded-2xl fixed w-[80px] h-[100vh] flex flex-col justify-between items-center bg-slate-800">
                {/* navbar logo */}
            <img src={logoImg} alt="logo" className='md:w-[80px] max-md:w-[50px]md:h-[80px] max-md:h-[50px]' />
            {/* dark-mode btn & img container */}
            <div className="flex flex-col items-center justify-center gap-4">
                {
                    colorTheme === 'light' ?
                    <img
                    onClick={handleToggle}
                    className='cursor-pointer'
                    src={moonIcon} alt="moon-icon"
                    />
                    :
                    <img
                    onClick={handleToggle}
                    className='cursor-pointer'
                    src={sunIcon} alt="moon-icon"  />
                }
                
                {/* border between icon & img */}
                <div className='md:w-[80px] max-md:w-[50px]md:h-[80px] max-md:h-[50px] border border-gray-500'></div>
                {/* profile img */}
                <div className="">
                    <img src={profileImg}
                    className='md:w-[50px] max-md:w-[30px]md:h-[50px] max-md:h-[30px] rounded-full mr-4'
                    alt="profile-img" />
                </div>
            </div>
            </div>
        </div>
    </>
    )
}

export default Navbar