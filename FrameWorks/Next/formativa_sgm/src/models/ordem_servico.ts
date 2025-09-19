
//definir primeiro a infraestrutura do obj

import mongoose, { Document, Model, Schema } from "mongoose";

export interface Servico extends Document{
    //herdamos a base Document do Mongoose
    //Vamos criar os atributos do OBJ
    titulo: string,
    descricao: string,
    dataAbertura: Date;
}

//vamos criar a Regra do Schema

const ServicoSchema: Schema<Servico> = new mongoose.Schema({
    titulo:{
        type:String,
        required:[true, "O Título é Obrigatorio"],
        trim: true,
        maxlength: [50, "máximo de 50 char"]
    },
    descricao:{
        type: String,
        trim:true
    },
    dataAbertura: {
        type: Date,
        default: Date.now //pega o carimbo de data e hora
    }

});

const Servico: Model<Servico> = mongoose.models.Servico || mongoose.model<Servico>("Servico",ServicoSchema);

//componente reutilizavel
export default Servico;