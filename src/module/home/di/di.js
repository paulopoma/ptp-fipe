import axios from "axios";
import { HomeController } from '../controller/homeController'
import { buscarMarcasRepository } from "../data/repository/buscarMarcasRepository";
import { buscarMarcasUsecase } from "../domain/usecase/buscarMarcasUsecase";
import { buscarModelosRepository } from "../data/repository/buscarModelosRepository";
import { buscarModelosUsecase } from "../domain/usecase/buscarModelosUsecase";
import { buscarAnosRepository } from "../data/repository/buscarAnosRepository";
import { buscarAnosUsecase } from "../domain/usecase/buscarAnosUsecase";
import { buscarValorRepository } from "../data/repository/buscarValorRepository";
import { buscarValorUsecase } from "../domain/usecase/buscarValorUsecase";
import { buscarGraficoUsecase } from "../domain/usecase/buscarGraficoUsecase";

const axiosInstance = axios.create({
    baseURL: "https://parallelum.com.br/fipe/api/v1"
})
const buscarMarcasRepositoryImpl = buscarMarcasRepository(axiosInstance)
const buscarMarcasUsecaseImpl = buscarMarcasUsecase(buscarMarcasRepositoryImpl)
const buscarModelosRepositoryImpl = buscarModelosRepository(axiosInstance)
const buscarModelosUsecaseImpl = buscarModelosUsecase(buscarModelosRepositoryImpl)
const buscarAnosRepositoryImpl = buscarAnosRepository(axiosInstance)
const buscarAnosUsecaseImpl = buscarAnosUsecase(buscarAnosRepositoryImpl)
const buscarValorRepositoryImpl = buscarValorRepository(axiosInstance)
const buscarValorUsecaseImpl = buscarValorUsecase(buscarValorRepositoryImpl)
const buscarGraficoUsecaseImpl = buscarGraficoUsecase(buscarValorRepositoryImpl)

const homeController = (context) => new HomeController(
    context,
    buscarMarcasUsecaseImpl,
    buscarModelosUsecaseImpl,
    buscarAnosUsecaseImpl,
    buscarValorUsecaseImpl,
    buscarGraficoUsecaseImpl)
export { homeController }