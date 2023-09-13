interface Veiculo {
  modelo: string;
  ano: number;
  portas: number;
  marca: string;
}

export class Carro implements Veiculo {
  modelo: string;
  ano: number;
  portas: number;
  marca: string;

  constructor(modelo: string, ano: number, portas: number, marca: string) {
    this.modelo = modelo;
    this.ano = ano;
    this.marca = marca;

    if (portas >= 2 && portas <= 4) {
      this.portas = portas;
    } else {
      throw new Error("Number of ports invalid");
    }
  }
}

export class Moto implements Veiculo {
  modelo: string;
  ano: number;
  portas: number;
  marca: string;
  rodas: number;

  constructor(modelo: string, ano: number, marca: string) {
    this.modelo = modelo;
    this.ano = ano;
    this.marca = marca;
    this.portas = 0;
    this.rodas = 2;
  }
}
