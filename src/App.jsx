import './App.css'
import AppRoutes from './AppRoutes'
import { GlobalStyles } from './GlobalStyles.styled'
import  AuthProvider  from "./context/AuthProvider";

function App() {
    return (
    <AuthProvider>
        <GlobalStyles />
        <AppRoutes />
    </AuthProvider>
    )
}

export default App
