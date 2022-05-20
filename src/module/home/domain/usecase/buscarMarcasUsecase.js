import { MarcaEnum } from "../model/marca"

const buscarMarcasUsecase = (repository) => async (tipo) => {
    try {
        return await repository(MarcaEnum[tipo])
    } catch (error) {
        throw error
    }
}

export { buscarMarcasUsecase }