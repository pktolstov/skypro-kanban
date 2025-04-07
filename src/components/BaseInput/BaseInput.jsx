import * as S from './BaseInput.styled'
function BaseInput({ error, type, name, id, placeholder, value, onChange }) {
    return (
        <S.Container style={{ backgroundColor: '#fff' }}>
            <S.Input className={error? 'error': ''}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                id={id}
                
               
            />
        </S.Container>
    )
}

function BaseButton({ id, onSubmit }) {
    return (
        <>
            <S.Button id={id} onClick={onSubmit}>
                Войти
            </S.Button>
        </>
    )
}

export { BaseInput, BaseButton }

