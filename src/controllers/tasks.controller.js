const pool = require('../db.js')


// traer todos los usuarios
// DESDE AQUI TRABAJO CON USUARIOS

const createUsers = async (req, res, next) => {
    const { id_org, nombre, correo, usuario, password } = req.body

    try {
        const result = await pool.query(
            "INSERT INTO users (id_org, nombre, correo, usuario,password) VALUES ($1, $2, $3, $4, $5) RETURNING *", [
            id_org,
            nombre,
            correo,
            usuario,
            password,
        ])

        //console.log(result);
        //res.send('Usuario creado');
        return res.json(result.rows[0]);

    } catch (error) {
        next(error);
    }

}

const getAllusers = async (req, res) => {
    try {
        const AllUsers = await pool.query('SELECT * FROM users')
        res.json(AllUsers.rows)
    } catch (error) {
        console.log(error.message);
    }
}

const getUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
        console.log(result)

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Usuario no encontro",
            });

        return res.json(result.rows[0]);

    } catch (error) {
        console.log(error.message);
    }
};


const deleteUser = async (req, res, next) => {

    const { id } = req.params
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id])

    if (result.rowCount === 0) return res.status(404).json({
        message: "Usuario no encontrado"
    });

    return res.sendStatus(204);
}





// DESDE AQUI TRABAJO CON ORGANIZACION    
const getAllTasks = async (req, res, next) => {
    try {
        const allOrganization = await pool.query('SELECT * FROM organization')
        res.json(allOrganization.rows)
    } catch (error) {
        console.log(error.message);
    }
}

const getTask = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await pool.query('SELECT * FROM organization WHERE id = $1', [id])
        console.log(result)

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Organizacion no encontrada",
            });

        return res.json(result.rows[0]);

    } catch (error) {
        console.log(error.message);
    }
};

const createTasks = async (req, res, next) => {
    const { nombre, descripcion, direccion, Contacto, correo } = req.body

    try {
        const result = await pool.query(
            "INSERT INTO organization (nombre, descripcion, direccion,Contacto,correo) VALUES ($1, $2, $3, $4, $5) RETURNING *", [
            nombre,
            descripcion,
            direccion,
            Contacto,
            correo
        ])

        //console.log(result);
        //res.send('creating a  taks');
        res.json(result.rows[0]);

    } catch (error) {
        next(error);
    }

}

const deleteTask = async (req, res, next) => {

    const { id } = req.params
    const result = await pool.query('DELETE FROM Organization WHERE id = $1 RETURNING *', [id])

    if (result.rowCount === 0) return res.status(404).json({
        message: "Organizacion no encontrada"
    });

    return res.sendStatus(204);
}

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, direccion, contacto, correo } = req.body;
    const result = await pool.query(
        'UPDATE organization SET id =$1, nombre=$2, descripcion=$3, direccion=$4, contacto=$5, correo=$6  WHERE id = $1 RETURNING *',
        [id, nombre, descripcion, direccion, contacto, correo]
    );
    if (result.rows.length === 0)
        return res.status(404).json({
            message: "organizacion no encontrada",
        });

    return res.json(result.rows[0]);
};


module.exports = {
    getAllTasks,
    getTask,
    createTasks,
    deleteTask,
    updateTask,
    createUsers,
    getAllusers,
    deleteUser,
    getUser,

}