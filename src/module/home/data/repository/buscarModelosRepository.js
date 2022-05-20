import { Modelo } from "../../domain/model/modelo"

const buscarModelosRepository = (axios) => async (tipo, marca) => {
    try {
        const response = await axios.get(`/${tipo}/marcas/${marca}/modelos`)
        return response.data.modelos.map((valor) => new Modelo(valor))
    } catch (error) {
        throw error
    }
}

export { buscarModelosRepository }