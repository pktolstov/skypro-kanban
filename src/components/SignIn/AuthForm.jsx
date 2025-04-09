import { useState } from 'react'
import * as S from './SignIn.styled'
import { BaseInput, BaseButton } from '../BaseInput/BaseInput'
import { useNavigate } from 'react-router-dom'
import { signIn, signUp } from '../../services/auth'

const AuthForm = ({ isSignUp, setIsAuth }) => {
    const navigate = useNavigate()
    // состояние полей
    const [formData, setFormData] = useState({
        name: '',
        login: '',
        password: '',
    })
    // состояние ошибок
    const [errors, setErrors] = useState({
        name: '',
        login: '',
        password: '',
    })
    // состояние текста ошибки, чтобы показать её пользователю
    const [error, setError] = useState('')
    // функция валидации
    const validateForm = () => {
        const newErrors = {
            name: '',
            login: '',
            password: '',
        }
        let isValid = true

        if (isSignUp && !formData.name.trim()) {
            newErrors.name = true
            setError('Заполните все поля')
            isValid = false
        }
        if (!formData.login.trim()) {
            newErrors.login = true
            setError('Заполните все поля')
            isValid = false
        }
        if (!formData.password.trim()) {
            newErrors.password = true
            setError('Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.')
            isValid = false
        }
        setErrors(newErrors)
        return isValid
    }
    // функция, которая отслеживает в полях изменения и меняет состояние компонента
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
        setErrors({ ...errors, [name]: false })
        setError('')
    }
    // функция отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateForm()) {
            // если у нас форма не прошла валидацию, то дальше не продолжаем
            return
        }
        try {
            // чтобы не писать две разных функции, выберем нужный запрос через тернарный оператор
            const data = !isSignUp
                ? await signIn({
                      login: formData.login,
                      password: formData.password,
                  })
                : await signUp(formData)
            if (data) {
                setIsAuth(true)
                localStorage.setItem('userInfo', JSON.stringify(data))

                navigate('/')
            }
        } catch (err) {
            setError(err.message)
        }
    }
    return (
        // <SignIn />

        <S.Container>
            <S.Card>
                <S.Title>{isSignUp ? 'Регистрация' : 'Вход'}</S.Title>
                <S.Form id="form" onSubmit={handleSubmit}>
                    <S.InputForm>
                        {isSignUp && (
                            <BaseInput
                                error={errors.name}
                                type="text"
                                name="name"
                                id="formname"
                                placeholder="Имя"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        )}

                        <BaseInput
                            error={errors.login}
                            type="text"
                            name="login"
                            id="formlogin"
                            placeholder="Эл. почта"
                            value={formData.login}
                            onChange={handleChange}
                        />

                        <BaseInput
                            style={error ? { borderColor: 'red' } : {}}
                            error={errors.password}
                            type="password"
                            name="password"
                            id="formpassword"
                            placeholder="Пароль"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </S.InputForm>

                    <S.ErrorText style={{ color: 'red' }}>{error}</S.ErrorText>
                </S.Form>
                <BaseButton
                    type="button"
                    onSubmit={handleSubmit}
                    // type="secondary"
                    // fullWidth={true}
                    text={isSignUp ? 'Зарегистрироваться' : 'Войти'}
                />
                {!isSignUp && (
                    <S.Text>
                        Нужно зарегистрироваться?{' '}
                        <S.Link href="/signUp">Регистрируйтесь здесь</S.Link>
                    </S.Text>
                )}
                {isSignUp && (
                    <S.Text>
                        Уже есть аккаунт?{' '}
                        <span>
                            <S.Link style={{ fontSize: '14px' }} href="/signIn">
                                Войдите здесь
                            </S.Link>
                        </span>{' '}
                    </S.Text>
                )}
            </S.Card>
        </S.Container>
    )
}
export default AuthForm
