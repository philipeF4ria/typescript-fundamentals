let meuNome: string = 'Philipe';
let idade: number = 20;

function retornaMeuNome(): string {
    return meuNome;
}

console.log(retornaMeuNome());

function falaOi(): void {
    console.log('Oi');
    
}

falaOi();

function soma(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(soma(2, 2));
