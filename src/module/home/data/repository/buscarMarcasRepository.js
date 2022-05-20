import { Marca } from "../../domain/model/marca"

const buscarMarcasRepository = (axios) => async (tipo) => {
    try {
        const response = await axios.get(`/${tipo}/marcas`)
        return response.data.map((valor) => new Marca(valor))
    } catch (error) {
        throw error
    }
}

export { buscarMarcasRepository }