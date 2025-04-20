import * as S from './BaseInput.styled'
function BaseInput({ error, type, name, id, placeholder, value, onChange, autoComplete }) {
    return (
       <S.Container style={{ backgroundColor: '#fff' }}>
            <S.Input className={error? 'error': ''} style={error ? { borderColor: 'red' } : {}}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                id={id}
                autoComplete={autoComplete}
                
               
            />
        </S.Container>
    )
}

function BaseButton({ id, text, onSubmit }) {
    return (
        <>
            <S.Button type='button' id={id} onClick={onSubmit}>
                {text}
            </S.Button>
        </>
    )
}

export { BaseInput, BaseButton }

