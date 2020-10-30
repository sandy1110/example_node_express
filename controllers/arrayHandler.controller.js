const recorriendoArreglo = (req, res) => {
    try {
        const {array} = req.body
        array.forEach((element) => {
            console.log(element);
        });
        res.status(200).send({arreglo : array});
    } catch (error) {
        console.log(error);
    }
}

const modificandoArreglo = (req, res) => {
    try {
        const {array} = req.body
        const multiplicaPorDos = (element) => {
            return element*2;
        }
        const arrayPorDos = array.map(multiplicaPorDos);
        res.status(200).send({arreglo : arrayPorDos});
    } catch (error) {
        console.log(error);
    }
}

const todos = (req, res) => {
    try {
        const {array} = req.body
        const buscarPositivos = (element) => {
            return element>0;
        }
        const booleanoPositivos = array.every(buscarPositivos);
        res.status(200).send({bool : booleanoPositivos});
    } catch (error) {
        console.log(error);
    }
}

const algunos = (req, res) => {
    try {
        const {array} = req.body
        const buscarNegativos = (element) => {
                return element<0;
        }
        const booleanoNegativos = array.some(buscarNegativos);
        res.status(200).send({bool : booleanoNegativos});
    } catch (error) {
        console.log(error);
    }
}

const ordenar = (req, res) => {
    try {
        const {array} = req.body
        const ordenarMayorMenor = (actual, proximo) => {
            if(actual < proximo)
                return 1
            if (actual > proximo)
                return -1
            return 0;
        }
        array.sort(ordenarMayorMenor);
        res.status(200).send({arreglo : array});
    } catch (error) {
        console.log(error);
    }
}

const reducir = (req, res) => {
    try {
        const {array} = req.body
        const concatenar = (acumulador, actual) => {
            return acumulador + actual;
        }
        const total = array.reduce(concatenar, 2000);
        res.status(200).send({total : total});
    } catch (error) {
        console.log(error);
    }
}

const indice = (req, res) => {
    try {
        const {array} = req.body
        const buscarMayor = (element) => {
            console.log(Math.max(...array));
            return Math.max(...array);
        }
        const indiceMayor = array.findIndex(buscarMayor);
        let Value = array.find(buscarMayor);
        console.log(Value);
        const indice = array.indexOf(277);
        console.log(indice);
        res.status(200).send({indice : Value});
    } catch (error) {
        console.log(error);
    }
}


module.exports = {recorriendoArreglo, modificandoArreglo, todos, algunos, ordenar, reducir, indice}