import { MarcaEnum } from "../model/marca"

const buscarModelosUsecase = (repository) => async (tipo, marca) => {
    try {
        return await repository(MarcaEnum[tipo], marca)
    } catch (error) {
        throw error
    }
}

export { buscarModelosUsecase }