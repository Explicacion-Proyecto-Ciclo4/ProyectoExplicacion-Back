import { connect } from 'mongoose';

const conectarBD = async () => {
   return await connect(
      'mongodb+srv://adminDavid:MunDial22*@gestionproyectos4.u6oih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
   )
   .then(() => {
      console.log("Conexión exitosa!")
   })
   .catch((e) => {
      console.error("Error de conexión", e)
   });
}

export default conectarBD;