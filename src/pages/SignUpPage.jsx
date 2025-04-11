import { GlobalStyles } from '../GlobalStyles.styled'
import AuthForm from '../components/SignIn/AuthForm'
function SignUpPage({ setIsAuth }) {
    return (
        <>
            <GlobalStyles />
            <AuthForm setIsAuth={setIsAuth} isSignUp={true} />
        </>
    )
}

export default SignUpPage
