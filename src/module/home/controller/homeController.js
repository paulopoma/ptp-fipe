import { alert } from 'cids-cgi/lib/util';
import * as echarts from 'echarts';
import { MarcaEnum } from '../domain/model/marca';

class HomeController {
    tipo = 0
    tipoValor = ""
    tipoValorEnum = {
        0: "Carros",
        1: "Motos",
        2: "Caminhões"
    }

    marca = ''
    marcas = []
    modelo = ''
    modelos = []
    ano = ''
    anos = [] // array de objetos
    valor = ''
    valorFipe = {} // objeto

    constructor(
        context,
        buscarMarcasUseCase,
        buscarModelosUseCase,
        buscarAnosUseCase,
        buscarValorUseCase,
        buscarGraficoUseCase,
    ) {
        this.context = context
        this.buscarMarcasUseCase = buscarMarcasUseCase
        this.buscarModelosUseCase = buscarModelosUseCase
        this.buscarAnosUseCase = buscarAnosUseCase
        this.buscarValorUseCase = buscarValorUseCase
        this.buscarGraficoUseCase = buscarGraficoUseCase
    }

    mounted() {
        this.buscarMarca(this.tipo)
    }

    async buscarMarca() {
        try {
            this.limpaMarca()

            this.tipoValor = this.tipoValorEnum[this.tipo]

            this.marcas = await this.buscarMarcasUseCase(this.tipo)
        } catch (error) {
            alert.show({ message: error.toString() })
        }
    }

    async buscarModelo() {
        try {
            this.limpaModelo()
            if (this.marca != '') {
                this.modelos = await this.buscarModelosUseCase(this.tipo, this.marca)
            }
        } catch (error) {
            alert.show({ message: error.toString() })
        }
    }

    async buscarAno() {
        try {
            this.limpaAno()
            if (this.modelo != '') {
                this.anos = await this.buscarAnosUseCase(this.tipo, this.marca, this.modelo)
                this.criaGrafico()
            }
        } catch (error) {
            alert.show({ message: error.toString() })
        }
    }

    async buscarValor() {
        try {
            if (this.ano != '') {
                this.valorFipe = await this.buscarValorUseCase(this.tipo, this.marca, this.modelo, this.ano)
            }
        } catch (error) {
            alert.show({ message: error.toString() })
        }
    }

    limpaMarca() {
        this.marca = ''
        this.marcas = []

        this.limpaModelo()
    }

    limpaModelo() {
        this.modelo = ''
        this.modelos = []

        this.limpaAno()
    }

    limpaAno() {

        this.ano = ''
        this.anos = []

        this.limpaValor()
    }

    limpaValor() {
        this.valor = ''
        this.valorFipe = {}
    }

    async criaGrafico() {
        try {
            const grafico = await this.buscarGraficoUseCase(this.tipo, this.marca, this.modelo, this.anos)

            const div = document.getElementById('chart')

            if (div) {
                // initialize the echarts instance
                const myChart = echarts.init(div);
                // Draw the chart
                myChart.setOption({
                    title: {
                        text: 'Comparativo',
                        x: 'center'
                    },
                    grid: {
                        left: 40,
                        bottom: 20,
                        top: 40,
                        right: 5,
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                        },
                        formatter: function (params) {
                            var tar = params[0]
                            tar.value = tar.value * 1000
                            return (
                                tar.name +
                                '<br/> Valor: ' +
                                tar.value.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })
                            )
                        },
                    },
                    xAxis: {
                        data: grafico.map((ano) => ano.valor.anoModelo)
                    },
                    yAxis: {},
                    series: [
                        {
                            name: 'anos',
                            type: 'line',
                            data: grafico.map((ano) =>
                                parseFloat(ano.valor.valor.replace('R$ ', '')
                                    .split('.')
                                    .join('')
                                    .replace(',', '.')) / 1000
                            )
                        }
                    ]
                });

            }
        } catch (error) {
            alert.show({ message: error.toString() })
        }
    }

}

export { HomeController }