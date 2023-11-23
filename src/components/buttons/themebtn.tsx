"use client";

import {useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


const ThemeBTN = () => {

    const [systemTheme , setSystemTheme] = useState("light");

      
    const { theme, setTheme } = useTheme();


    useEffect(() => {
        if (typeof window !== 'undefined' && window !== undefined) {
            // 👉️ can use window here
            setSystemTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        }
        
        setTheme(systemTheme);
        
    }, [])
    

    const currentTheme = theme === 'system' ? systemTheme : theme;

    console.log(theme);
  
    return (
        <button 
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className="btn mt-8"
            type="button"
            title="Theme Mode Switcher"
        >
            <FontAwesomeIcon icon={theme == "dark"  ? faMoon : faSun} />
            
           

        </button>
    )
}

export default ThemeBTN;