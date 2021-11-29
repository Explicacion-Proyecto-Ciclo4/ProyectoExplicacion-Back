import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/types.js';
import { tiposUsuario } from '../models/user/types.js';
import { tiposProyecto } from '../models/project/types.js';
import { tiposAvance } from '../models/advance/types.js';
import { tiposInscripcion } from '../models/inscription/types.js';
import { tiposAutenticacion } from './auth/types.js';

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [
  tiposGlobales,
  tiposEnums,
  tiposUsuario,
  tiposProyecto,
  tiposAvance,
  tiposInscripcion,
  tiposAutenticacion,
];