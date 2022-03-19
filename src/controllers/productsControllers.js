comuna1 = [{
    comunaID: 1,
    comunaIncludes: "Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución",
    comunaParaghy: "La Comuna 1 está integrada por los 	barrios de <strong class='colorStrong'> Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución.</strong>"
}]

let controller = {
    landingProductos: (req, res) => {
        res.render('products/landingProducts', {
            title: 'PRODUCTOS - CABA',
            comunaID: 1,
            comunaIncludes: "Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución",
            comunaParaghy: "La Comuna 1 está integrada por los 	barrios de  Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución."
        })
    },
    detalleProductos: (req, res) => {
        res.render('products/detallesID', { title: 'detalles' })
    }
}
module.exports = controller