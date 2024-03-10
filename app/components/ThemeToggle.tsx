"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
    {/* {theme === "light" ? "Dark" : "Light"} */}
    {theme === "light" ? <FontAwesomeIcon icon={faSun} className='w-4'/> : <FontAwesomeIcon icon={faMoon} className='w-4'/>}
    </button>
  );
};        
export default ThemeToggle;