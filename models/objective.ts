import { Schema, model } from 'mongoose';
import { Enum_TipoObjetivo } from './enums';

interface Objective {
   descripcion: String;
   tipo: Enum_TipoObjetivo;
   proyecto: Schema.Types.ObjectId;
}

const objectiveSchema = new Schema<Objective>({
   descripcion:{

   },
   tipo: {

   },
   proyecto: {

   }
})