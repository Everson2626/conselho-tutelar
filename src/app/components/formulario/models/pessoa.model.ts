export class Pessoa {
    public nmPessoa!: string;
    public dsEndereco!: string;
    public dsCidade!: string;
    public dsEmail!: string;
    public dsCelular!: string;
    public dsCpf!: string;
    public dsRg!: string;
    public imgs!: any[];
    public dsCidadePrefeitura!: any;

    constructor(pessoa: any){
        this.nmPessoa = pessoa.nmPessoa;
        this.dsEndereco = pessoa.dsEndereco;
        this.dsCidade = pessoa.dsCidade;
        this.dsEmail = pessoa.dsEmail;
        this.dsCelular = pessoa.dsCelular;
        this.dsCpf = pessoa.dsCpf;
        this.dsRg = pessoa.dsRg;
        this.dsCidadePrefeitura = pessoa.dsCidadePrefeitura;
    }
}