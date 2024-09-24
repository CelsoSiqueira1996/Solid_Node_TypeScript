interface IPagamento {
    valor: number;
    pagar(): void;
}

class PagamentoCheque implements IPagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }
    
    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por cheque.`);
    }
}


class PagamentoDinheiro implements IPagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por dinheiro.`);
    }
}

class PagamentoPorPix implements IPagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por pix.`);
    }
}

const pagamentoCheque = new PagamentoCheque(100);
pagamentoCheque.pagar();

const pagamentoDinheiro = new PagamentoDinheiro(200);
pagamentoDinheiro.pagar();

const pagamentoPix = new PagamentoPorPix(300);
pagamentoPix.pagar();

