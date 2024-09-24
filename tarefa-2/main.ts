const MES_COMERCIAL = 20;

interface ContratoRemuneravel {
    titulo: string;
    remuneracao(): number;
}

class ContratoClt implements ContratoRemuneravel {
    private GANHO_POR_HORA_CLT: number = 24;
    private CARGA_HORARIA_DIARIA_CLT: number = 8;
    titulo: string = 'CLT';
    remuneracao(): number {
        return this.GANHO_POR_HORA_CLT * this.CARGA_HORARIA_DIARIA_CLT
    }
}

class Estagio implements ContratoRemuneravel {
    private GANHO_POR_HORA_ESTAGIARIO: number = 14;
    private CARGA_HORARIA_DIARIA_ESTAGIARIO: number = 4;
    titulo: string = 'Estagiário';
    remuneracao(): number {
        return this.GANHO_POR_HORA_ESTAGIARIO * this.CARGA_HORARIA_DIARIA_ESTAGIARIO;
    }
}

class ContratoPj implements ContratoRemuneravel {
    private GANHO_POR_HORA_PJ: number = 36;
    private CARGA_HORARIA_DIARIA_PJ: number = 8;
    titulo: string = 'PJ';
    remuneracao(): number {
        return this.GANHO_POR_HORA_PJ * this.CARGA_HORARIA_DIARIA_PJ;
    }
    
}

class FolhaDePagamento {
    static calcularSalarioMensal(funcionario: ContratoRemuneravel): number {
        return funcionario.remuneracao() * MES_COMERCIAL;
    }
}

const estagiario = new Estagio();
const clt = new ContratoClt();
const pj = new ContratoPj();

console.log(`Eu sou ${estagiario.titulo} e recebo por mês R$${FolhaDePagamento.calcularSalarioMensal(estagiario)}.`);
console.log(`Eu sou ${clt.titulo} e recebo por mês R$${FolhaDePagamento.calcularSalarioMensal(clt)}.`);
console.log(`Eu sou ${pj.titulo} e recebo por mês R$${FolhaDePagamento.calcularSalarioMensal(pj)}.`);