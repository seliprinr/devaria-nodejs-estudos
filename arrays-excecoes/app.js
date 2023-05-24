
try{
    const listaDeprodutosDisponiveis = [
        "Pao",
        "Leite",
        "Cafe",
        "Laranja",
        "Macarrao",
        "Sabonete",
        "Detergente",
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeprodutosDisponiveis.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento === produto);
    })
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nós temos: ${produto}`));
    
    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeprodutosDisponiveis.find(produto => produto === argumento);
    })
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto nós não temos: ${argumento}`));
    
    const listaDeProdutosOrdenados = listaDeprodutosDisponiveis.sort();
    listaDeprodutosDisponiveis.forEach(produto => console.log(`Este produto está disponível: ${produto}`));
}catch(e){
        console.log('Não foi possível executar o pedido de compra');
}


