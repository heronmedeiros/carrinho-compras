let totalGeral;
const limpar = () => {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').innerHTML = `R$${totalGeral}`;
}

limpar();

const adicionar = () => {
  //recuperar valores. Nome do produto, quantidade e valor
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = produto.split('R$')[1];
  let quantidade = document.getElementById('quantidade').value;
  let valorTotal = document.getElementById('valor-total');

  //calcular o preço, subtotal
  let preco = quantidade * valorUnitario;

  //adicionar no carrinho
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML + `
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>
  `;
  //atualizar o valor total da compra
  totalGeral += preco;
  valorTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById('quantidade').value = 0;
}

