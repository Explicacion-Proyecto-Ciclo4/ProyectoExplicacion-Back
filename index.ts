import conectarBD from './db/db';
import { UserModel } from './models/user';
import { Enum_Rol } from './models/enums';

const main = async () => {
   await conectarBD();

   // CREAR UN USUARIO
   // await UserModel.create({
   //    apellido: 'Saldarriaga',
   //    correo: 'dsl@cc.com',
   //    identificacion: '123234',
   //    nombre: 'daniel',
   //    rol: Enum_Rol.administrador,
   // })
   //    .then((u) => {
   //       console.log('Usuario creado', u);
   //    })
   //    .catch((e) => {
   //       console.error('Error creando el usuario', e);
   // });

   //TRAER UN USUARIO
   // await UserModel.findOne({ identificacion: '123234' })
   //    .then((u) => {
   //       console.log("Usuario actualizado", u)
   //    })
   //    .catch((e) => {
   //       console.error(e)
   //    })

   //TRAER LOS USUARIOS
   // await UserModel.findOne({ identificacion: '123234' })
   //    .then((u) => {
   //       console.log("Usuario actualizado", u)
   //    })
   //    .catch((e) => {
   //       console.error(e)
   //    })

   // EDITAR UN USUARIO
   // await UserModel.findOneAndUpdate(
   //    { correo: 'dls@cc.com'},
   //    { 
   //       nombre: 'David',
   //       apellido: 'Ramirez',
   //    }
   // )
   //    .then((u) => {
   //       console.log("Usuario actualizado", u)
   //    })
   //    .catch((e) => {
   //       console.error("Error actualizando", e)
   //    })

   // // ELIMINAR UN USUARIO
   // await UserModel.findOneAndDelete({ correo: 'dsl@cc.com'})
   //    .then((u) => {
   //       console.log("Usuario Eliminado", u)
   //    })
   //    .catch((e) => {
   //       console.error("Error eliminando usuario", e)
   //    })
}

main();