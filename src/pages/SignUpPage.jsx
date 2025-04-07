import SignUp from '../components/SignUp/SignUp'
import { GlobalStyles } from '../GlobalStyles.styled'
import AuthForm from '../components/SignIn/AuthForm'
function SignUpPage({setIsAuth}) {
    return (
        <>
            <GlobalStyles />
            <AuthForm setIsAuth={setIsAuth}  isSignUp={true}/>
            {/* <SignUp /> */}
        </>
    )
}

export default SignUpPage