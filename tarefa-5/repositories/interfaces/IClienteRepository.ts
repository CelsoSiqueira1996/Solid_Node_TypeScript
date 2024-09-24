import Cliente from "../../entities/Cliente";

export default interface IClienteRepository {
    adicionaCliente(cliente: Cliente): void;
    listaClientes(): Cliente[];
}