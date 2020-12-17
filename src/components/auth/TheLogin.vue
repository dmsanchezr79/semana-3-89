<template >
<div class="container mt-5" :style="{ background: color}">
  <form>

    <div class="form-group">
      <div >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
</svg> 

      <label for="exampleInputEmail1"><b><p> </p> Email address</b>  </label>
     
      </div>
      
      <input
        v-model="login.email"
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <small id="emailHelp" class="form-text text-muted"
        >Ingrese su correo completo.</small
      >
    </div>
    <div class="form-group">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
</svg>
      <label for="exampleInputPassword1"><b> Password</b></label>
      <input v-model="login.password" type="password" class="form-control" id="exampleInputPassword1" v-on:keyup.enter="loginUser" />
      <small id="passwordlHelp" class="form-text text-muted"
        >Sus datos de inicio no serán divulgados.</small
      >
      <!-- <pre>
          {{login}}
      </pre> -->
    
    </div>

    <button 
    @click.prevent="loginUser"
    type="submit" 
    class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<script>
import swal from 'sweetalert';

export default {
  name: "TheLogin",
  data() {
    return {
     
      color: '#90E0EF',
        login:{
            email:'',
            password: '',

        }
    };
  },
  methods: {
      async loginUser (){
          try {
              let response = await this.$http.post('/api/usuario/login', this.login)

              // let response = await this.$http.post('/api/user/login', this.login)
            //   console.log(response.data)
              let token = response.data.tokenReturn;
              let user = response.data.user;

              localStorage.setItem('jwt',token);
              localStorage.setItem('user', JSON.stringify(user));
              if(token){
                  swal("¡Datos Correctos!", "Se ha iniciado sesión. Bienvenido.", "success");
                  this.$router.push('/home');
              }
                  
              
          } catch (error) {
              swal("¡Error!", "Algo salio mal!", "error");

            //   console.log(error.response)
          }
      }

  },
};

</script>