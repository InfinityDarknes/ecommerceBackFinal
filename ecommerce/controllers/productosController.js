const getProductos = (req, res) =>{
    res.status(200).json({mensaje: 'Get tareas 123'})
}

const createProductos = (req, res) =>{
    res.status(200).json({mensaje: 'Create tareas'})
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