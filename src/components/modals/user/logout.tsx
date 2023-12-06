"use client";
import {useRouter }         from 'next/navigation';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faUserMinus }      from '@fortawesome/free-solid-svg-icons';

const Logout = () => {
    const router = useRouter();

    return (<>
        <button 
            type='button' 
            title='Logout' 
            className="btn" 
            onClick={(e) =>{
                e.preventDefault();
                router.push('/api/auth/signout?callbackUrl=/');
            }}>
            <FontAwesomeIcon icon={faUserMinus} />
        </button>
        
    </>
    )
}

export default Logout;