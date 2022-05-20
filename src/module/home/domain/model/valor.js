class Valor {
  constructor({
    Valor = '',            // "R$ 127.739,00"
    Marca = '',            // "VW - VolksWagen"
    Modelo = '',           // "AMAROK High.CD 2.0 16V TDI 4x4 Dies. Aut"
    AnoModelo = 0,         // 2014
    Combustivel = '',      // "Diesel"
    CodigoFipe = '',       // "005340-6"
    MesReferencia = '',    // "maio de 2022 "
    TipoVeiculo = 0,       // 1
    SiglaCombustivel = ''  // "D"
  }) {
    this.valor = Valor
    this.marca = Marca
    this.modelo = Modelo
    this.anoModelo = AnoModelo
    this.combustivel = Combustivel
    this.codigoFipe = CodigoFipe
    this.mesReferencia = MesReferencia
    this.tipoVeiculo = TipoVeiculo
    this.siglaCombustivel = SiglaCombustivel
  }
}

export { Valor }
