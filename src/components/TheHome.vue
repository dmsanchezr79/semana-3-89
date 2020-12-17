<template >
<div :style="{ background: color }">

    <nav class="navbar navbar-expand-lg navbar-light bg-light" >
        <div class="container-fluid" :style="{ background: color1}">

            <a class="navbar-brand" href="#">
                <img src="@/assets/logo1.png" alt="" width="70" height="35" class="d-inline-block align-top">      
                <b>Inicio</b>  </a>
                <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->
                    <!-- <form class="form-inline my-2 my-lg-0"> -->
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button 
                    class="btn btn-outline-dark justify-content-md-end"
                    :style="{ background: color }"
                    type="button"
                    @click="CerrarSesion"
                    > <b>Cerrar Sesión</b> </button>
                <!-- <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span class="navbar-toggler-icon"></span>

                </button>               -->
                        </div>
                    <!-- </form> -->
                
                <!-- </div> -->
        </div>
   </nav>

<div class="container" :style="{ background: color1}">
     
        <h1>¡Bienvenido <b>{{user.nombre}}</b> !</h1> 
        <!-- {{user.username}} -->
    <div class="container" :style="{ background: color}">
    <img src="https://i.pinimg.com/originals/38/68/c9/3868c905dd5ca902efe7828f9754b28f.gif" alt="inicio" >

    </div>

    <h4> Recuerda renovar la contraseña de tu correo
       <b>{{user.email}}</b> , por seguridad.
    </h4>
</div>
</div>


</template>

<script>
import swal from "sweetalert";
export default {
  data() {
    return {
    color: '#2A9D8F',
    color1: '#90E0EF' ,
    color2: '#D5C5C8' ,
      user: {},
    };
  },
  methods: {
    getUserData() {
      let user = localStorage.getItem("user");
      let token = localStorage.getItem("jwt");
      if (token) {
        this.user = JSON.parse(user);
          }
    // console.log(user);
    // this.user= user;
    // console.log(this.user);
    

    
    },
    CerrarSesion() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      swal("Logout exitoso", "Sesión finalizada!", "success");
      this.$router.push("/");
    },
  },
  created() {
    this.getUserData();
  },
};
</script>
<style scooped>
</style>