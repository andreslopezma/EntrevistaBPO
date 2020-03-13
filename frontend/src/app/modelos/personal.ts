export class Personal {
    constructor( id = '', Nombres = '', Documento = '', fechaInicio = null, fechaFin = null, fechaInicioTurno= null, fechaFinTurno= null, fechaInicioExtra = null , fechaFinExtra = null, motivoExtra = '' ) {
        this.id = id;
        this.Nombres = Nombres;
        this.Documento = Documento;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.fechaInicioExtra = fechaInicioExtra;
        this.fechaFinExtra = fechaFinExtra;
        this.motivoExtra = motivoExtra;
    }
    id: string;
    Nombres: string;
    Documento: string;
    fechaInicio: string;
    fechaFin: string;
    fechaInicioTurno: string;
    fechaFinTurno: string;
    fechaInicioExtra: string;
    fechaFinExtra: string;
    motivoExtra: string;
}
