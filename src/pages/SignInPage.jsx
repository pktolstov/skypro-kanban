import SignIn from '../components/SignIn/SignIn'
import { GlobalStyles } from '../GlobalStyles.styled'
function SignInPage({setIsAuth}) {
    return (
        <>
            <GlobalStyles />
            <SignIn setIsAuth={setIsAuth}/>
        </>
    )
}

export default SignInPage
