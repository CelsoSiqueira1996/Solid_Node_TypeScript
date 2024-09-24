import Cliente from "../entities/Cliente";
import IClienteRepository from "../repositories/interfaces/IClienteRepository";

export default class ClienteController {
    constructor(private repository: IClienteRepository) {}

    adicionaCliente(cliente: Cliente) {
        this.repository.adicionaCliente(cliente);
    }
    listaClientes(): Cliente[] {
        return this.repository.listaClientes();
    }
}