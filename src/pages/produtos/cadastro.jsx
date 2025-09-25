import './produto.css'
import { useState, useEffect} from 'react'
import axios from 'axios'
const CadastroProduto = ()=>{
    const [dados, setDados] = useState({})

    const montaJson = () => {
        setDados({
            "nome":nome.value,
            "descricao":descricao.value,
            "tipo":tipo.value,
            "categoria_id":1
        })
        alert(JSON.stringify(dados))
    }

useEffect(()=>{
    axios.post("http://172.19.0.49/pizzariaoficial/api/v1/produto", {dados})
    .then(response=>console.log(response.data.status))
    .catch(error=>console.log(error))
}, [dados])
    return(
        <div className="CadastroProduto">
            <input type ="text" id="id" placeholder="0" disabled />
            <input type ="text" id="nome" className="nome do produto" />
            <input type ="text" id="descricao" placeholder="Descrição" />
            <input type ="text" id="tipo" placeholder="tipo do produto" />
            <input type ="text" id="categoria_id" value="1" disabled />
     
            <input type="button" value={"Cadastrar"}
            onClick={()=>alert("Cadastro")}/>
        </div>
    )
}

export default CadastroProduto