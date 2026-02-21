function procLista(lista, func) {
    let novaLista = [];

    for (const item of lista) {
        const resultado = func(item);

        if (resultado !== undefined && resultado !== null) {
            novaLista.push(resultado);
        }
    }

    return novaLista;
}

function dobrar(n) {
    return n * 2;
}

const lista = [20, 5, 100, 30, 10, 2, 1, 80];
const resultado = procLista(lista, dobrar);