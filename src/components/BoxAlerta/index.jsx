import './style.css'

// a prop children é uma forma de passar elementos filhos para dentro de um componente.

export default function Botap({nome, ...rest}) {
    return (
        <button className="botao-container" {...rest}>
            {nome}
        </button>
    )
}