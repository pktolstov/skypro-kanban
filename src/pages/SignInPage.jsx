
import { GlobalStyles } from '../GlobalStyles.styled'
import AuthForm from '../components/SignIn/AuthForm'
function SignInPage({setIsAuth}) {
    return (
        <>
            <GlobalStyles />
            <AuthForm setIsAuth={setIsAuth}  isSignUp={false}/>
        </>
    )
}

export default SignInPage
