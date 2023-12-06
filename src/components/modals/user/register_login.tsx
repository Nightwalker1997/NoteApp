"use client";
import { useState }         from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faRightToBracket, 
         faUserPlus }       from '@fortawesome/free-solid-svg-icons';
import RegisterForm         from './register';
import LoginForm            from './login';
import ForgotPasswordForm   from './fogotpassword';

const RegLog = () => {
    const [ logInModalVisible,      setLogInModalVisible ]      = useState<boolean>(false);
    const [ registerModalVisible,   setRegisterModalVisible ]   = useState<boolean>(false);
    const [ forgotModalVisible,     setForgotModalVisible ]     = useState<boolean>(false);

    return (<>
        <div>
        <button type='button' title='Sign In' className="btn" onClick={(e) =>{setLogInModalVisible(true)}}>
            <FontAwesomeIcon icon={faRightToBracket} />
        </button>
        {/* <span>/</span> */}
        <button type='button' title='Register New User' className="btn" onClick={(e) =>{setRegisterModalVisible(true)}}>
           <FontAwesomeIcon icon={faUserPlus} />
        </button>
        </div>
        {   
            logInModalVisible 
            ?
                <LoginForm setForgotModalVisible={setForgotModalVisible} setLogInModalVisible={setLogInModalVisible} />
            :
                registerModalVisible 
                ?
                
                    <RegisterForm setLogInModalVisible={setLogInModalVisible} setRegisterModalVisible={setRegisterModalVisible} />   
                :
                    forgotModalVisible
                    ?
                        <ForgotPasswordForm setForgotModalVisible={setForgotModalVisible} />
                    :
                        null
            }
    </>
    )
}

export default RegLog;