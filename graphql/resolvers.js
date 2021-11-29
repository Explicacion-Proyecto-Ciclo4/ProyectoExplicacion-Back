import { resolversProyecto } from '../models/project/resolvers.js';
import { resolversUsuario } from '../models/user/resolvers.js';
import { resolversAvance } from '../models/advance/resolvers.js';
import { resolverInscripciones } from '../models/inscription/resolvers.js';
import { resolversAutenticacion } from './auth/resolvers.js';

export const resolvers = [
  resolversUsuario,
  resolversProyecto,
  resolversAvance,
  resolverInscripciones,
  resolversAutenticacion,
];