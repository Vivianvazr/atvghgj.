import Botao from './components/Botao'

export default function App() {
   const alerta = () => {
    alert ('Muito bem, você clicou no botaozão')
   }
   return(
    <div>
     <Botao nome='' onClick={alerta}/>
    </div>
   )
}