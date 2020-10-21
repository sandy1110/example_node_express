const saludoES = (req, res) => {
    res.status(200).send('Hola mundo');
}

const saludoEN = (req,res) => {
    res.status(200).send('Hello world')
}

module.exports = {saludoES, saludoEN}