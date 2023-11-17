"use client";

import {useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeBTN = () => {

    const [systemTheme , setSystemTheme] = useState("light");
    if (typeof window !== 'undefined') {
        // 👉️ can use window here
        setSystemTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
      
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setTheme(systemTheme);
        setMounted(true);
    }, [])
    
    // if (mounted) {return null;}

    const currentTheme = theme === 'system' ? systemTheme : theme;

    console.log(theme);
  
    return (
        <button 
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className="btn mt-8"
        >
            
            {theme == "dark" 
                ? 
                    <svg className="w-6" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                : 
                    <svg className="w-6" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
            }

        </button>
    )
}

export default ThemeBTN;