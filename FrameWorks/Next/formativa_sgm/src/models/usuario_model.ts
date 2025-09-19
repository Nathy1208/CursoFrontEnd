
//definir primeiro a infraestrutura do obj

import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface Usuario extends Document{
    //herdamos a base Document do Mongoose
    //Vamos criar os atributos do OBJ
    nome:string;
    email:string;
    senha:string; ///pode ser nulo
    comparePassword(userPassaword:string): Promise<boolean>;
}

//vamos criar a Regra do Schema

const UsuarioSchema: Schema<Usuario> = new mongoose.Schema({
    nome:{
        type:String,
        required:[true, "O Título é Obrigatorio"],
        trim: true,
        maxlength: [250, "máximo de 250 char"]
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    senha: {
        type: String,
        required: true,
        select:false,
        maxlength: [50, "máximo de 50 char"]
    }

});

//Middleware para hashear a senha: serve para criptografar a senha que ira ser salva no bd
UsuarioSchema.pre<Usuario>('save', async function (next){
    if(!this.isModified('senha') || !this.senha) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.senha = await bcrypt.hash(this.senha, salt);
        next();
    } catch (error:any) {
        next(error);
    }
})


//método para comparar senha: compara a senha escita com a senha registrada no bd
UsuarioSchema.methods.comparePassword = async function (userPassword: string): Promise<boolean> {
    return bcrypt.compare(userPassword, this.senha);
};

const Usuario: Model<Usuario> = mongoose.models.Usuario || mongoose.model<Usuario>("Usuario", UsuarioSchema);

export default Usuario;