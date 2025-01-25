// Desafio Classe de herói
// Autor Leonardo Almeida

// Classe Heroi
class Heroi {
    // Construtor da classe para definir as propriedades do herói
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar que exibe a mensagem conforme o tipo de herói
    atacar() {
      let ataque = "";
  
      // Definir o tipo de ataque com base no tipo do herói
      if (this.tipo === "mago") {
        ataque = "magia";
      } else if (this.tipo === "guerreiro") {
        ataque = "espada";
      } else if (this.tipo === "lutador") {
        ataque = "soco";
      } else if (this.tipo === "bruxo") {
        ataque = "feitiço";
      } else {
        ataque = "ataque desconhecido";
      }
  
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias de heróis e chamando o método atacar
  const heroi1 = new Heroi("Dimagia", 300, "mago");
  heroi1.atacar(); // O mago atacou usando magia
  
  const heroi2 = new Heroi("Aragorn", 35, "guerreiro");
  heroi2.atacar(); // O guerreiro atacou usando espada
  
  const heroi3 = new Heroi("Charles Oliveira", 32, "lutador");
  heroi3.atacar(); // O lutador atacou usando soco
  
  const heroi4 = new Heroi("Ronaldinho Gaúcho", 17, "bruxo");
  heroi4.atacar(); // O bruxo atacou usando feitiço
  