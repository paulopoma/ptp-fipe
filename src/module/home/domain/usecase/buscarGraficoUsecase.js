import { MarcaEnum } from "../model/marca"

const buscarGraficoUsecase = (repository) => async (tipo, marca, modelo, anos) => {
    try {
        const anosComValor = await Promise.all(
            anos.map(async (ano) => {
                ano['valor'] = await repository(MarcaEnum[tipo], marca, modelo, ano.codigo)

                return ano
            })
        )
        return anosComValor.reverse()
    } catch (error) {
        throw error
    }
}

export { buscarGraficoUsecase }