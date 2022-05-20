import { Ano } from "../../domain/model/ano"

const buscarAnosRepository = (axios) => async (tipo, marca, modelo) => {
    try {
        const response = await axios.get(`/${tipo}/marcas/${marca}/modelos/${modelo}/anos`)
        return response.data.map((valor) => new Ano(valor))
    } catch (error) {
        throw error
    }
}

export { buscarAnosRepository }