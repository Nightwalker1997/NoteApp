//apply to  all applications
export { default } from "next-auth/middleware"

// apply to only matching routes 
// export const config = {matcher : [["/extera", "/dashboard"],]} 


// Latest versions of NextJS requires the user to have a single middleware file on the same level as the pages folder.

// Instead of {root}/pages/middleware.js, try {root}/middleware.js
// and if you have a src folder try {root}/src/middleware.js.
