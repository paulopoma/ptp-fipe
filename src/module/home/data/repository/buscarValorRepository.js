import { Valor } from "../../domain/model/valor"

const buscarValorRepository = (axios) => async (tipo, marca, modelo, ano) => {
    try {
        const response = await axios.get(`/${tipo}/marcas/${marca}/modelos/${modelo}/anos/${ano}`)
         return new Valor(response.data) ?? {}
    } catch (error) {
        throw error
    }
}

export { buscarValorRepository }