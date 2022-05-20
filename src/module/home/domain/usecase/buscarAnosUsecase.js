import { MarcaEnum } from "../model/marca"

const buscarAnosUsecase = (repository) => async (tipo, marca, modelo) => {
    try {
        return await repository(MarcaEnum[tipo], marca, modelo)
    } catch (error) {
        throw error
    }
}

export { buscarAnosUsecase }