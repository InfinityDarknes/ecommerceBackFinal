const getProductos = (req, res) =>{
    res.status(200).json({mensaje: 'Get tareas 123'})
}

const createProductos = (req, res) =>{

    const {name, code, category} = req.body

    if(!name || code || category){
        res.status(400)
        throw new Error('Faltan datos por completar')
    }
    const producto = await Producto.create({
        
    })
}

const updateProductos = (req, res) =>{
    res.status(200).json({mensaje: `Modificar la tarea con id ${req.params.id}`})
}

const deleteProductos = (req, res) =>{
    res.status(200).json({id: req.params.id})
}

module.exports = {
    getProductos, createProductos, updateProductos,deleteProductos
}