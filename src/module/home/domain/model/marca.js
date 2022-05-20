const MarcaEnum = {
  0: "carros",
  1: "motos",
  2: "caminhoes"
}

class Marca {
  constructor({
    codigo = '',
    nome = '',
  }) {
    this.codigo = codigo
    this.nome = nome
  }
}

export { Marca, MarcaEnum }
