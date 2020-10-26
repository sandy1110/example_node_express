const recorriendoArreglo = (req, res) => {
    try {
        console.log(req);
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
        console.log(req);
        const {array} = req.body

        array.forEach((element) => {
            console.log(element);
        });
        res.status(200).send({arreglo : array});
    } catch (error) {
        console.log(error);
    }
}
module.exports = {recorriendoArreglo, modificandoArreglo}