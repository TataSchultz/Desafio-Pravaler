import InputMask from "react-input-mask";
import { Botao } from "../../Componentes/Botao/botao";

const Cadastro = ()=>{
    return (
        <><div className="formulario">
            <form>
                <h1>Cadastrar</h1>
                
                
                <input type="text" placeholder="Nome" required></input>
                <input type="email" placeholder="Digite seu melhor e-mail" required></input>
                <InputMask
                    mask="(99)99999-9999"
                    placeholder="Telefone"
                    maskChar={null}
                    type="tel" />
                <input type="text" placeholder="Endereço"></input>
                <Botao 
                    type="submit"
                    placeholder="Enviar dados pessoais"/>
            </form>

        </div>
        </>
    )
}

export default Cadastro

