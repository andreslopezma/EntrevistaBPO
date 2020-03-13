const Personal = require('../models/personal');
const personalController = {};

personalController.getPersonales = async(req, res) => {
    const empleoyees = await Personal.find();
    res.json(empleoyees);
};

personalController.createPersonal = async(req, res) => {
    const empleoyee = new Personal({
        Nombres: req.body.nombres,
        Documento: req.body.documento,
        fechaInicio: req.body.fechaInicio,
        fechaFin: req.body.fechaFin,
        fechaInicioTurno: req.body.horaInicio,
        fechaFinTurno: req.body.horaFin,
        fechaInicioExtra: req.body.horaInicioExtra,
        fechaFinExtra: req.body.horFinExtra,
        motivoExtra: req.body.motivoExtra,
    });
    await empleoyee.save();
    res.json({
        'status': 'Empelado guarado'
    });
};

personalController.getPersonal = async(req, res) => {
    console.log(req.params.id)
    const empleoyee = await Personal.findById(req.params.id);
    res.json(empleoyee);

};

//modificar cuando este lista la vista
personalController.updatePersonal = async(req, res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Empleoyee.findByIdAndUpdate(id, { $set: employee }, { new: true });
    res.json({ status: 'Empleado actualizado', employee: employee });

};
personalController.deletePersonal = async(req, res) => {
    await Empleoyee.findByIdAndDelete(req.params.id);
    res.json({ status: 'Empleado eliminado' });


};


module.exports = personalController;