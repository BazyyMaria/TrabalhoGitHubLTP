
    // divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto{
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }
    Mostrar(){
        return `<div>${this.nome}</div>`;
        return this.nome + this.dataCadastro + this.descricao + this.preco;
    }
}

class ProdutoDestaque extends Produto{
    constructor(nome, dataCadastro, descricao, preco, produto_destaqueimg){
        super(nome, dataCadastro, descricao, preco);
        this.produto_destaqueimg = produto_destaqueimg;
    }
    mostrar_produto_destaque(){
        return `<div>${this.nome}</div>`;  
        return this.nome + this.dataCadastro + this.descricao + this.preco + this.produto_destaqueimg
          
    }
}

let Produto = new Produto ("Batom","15/08/2022","Batom vermelho matte hidratante",45)
console.log(Produto.Mostrar())



let ProdutoDestaque = new ProdutoDestaque("Delineador Líquido","15/08/2022","Delineador líquido preto secagem rápida e longa duração",40,"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/5/vult-delineador-liquido-3ml-30006-8607390253998952200.png")
console.log(ProdutoDestaque.mostrar_produto_destaque())