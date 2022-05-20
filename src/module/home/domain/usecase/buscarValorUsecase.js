import { MarcaEnum } from "../model/marca"

const buscarValorUsecase = (repository) => async (tipo, marca, modelo, ano) => {
    try {
        return await repository(MarcaEnum[tipo], marca, modelo, ano)
    } catch (error) {
        throw error
    }
}

export { buscarValorUsecase }