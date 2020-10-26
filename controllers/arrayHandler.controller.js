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
module.exports = {recorriendoArreglo, modificandoArreglo, todos}