<template >
  <div class="container mt-5"  >
    <div class="row">
      <div id="part1" class="col-sm" >
          <img src="https://2.bp.blogspot.com/-zO8hwvt7iMk/XAVxt4aoQvI/AAAAAAAAwa0/_01xZj87g04GvxpSEKEGRVBEWggW-fC5gCLcBGAs/s1600/7T9364v.gif" alt="" height="520px" width="730px" >
      </div>

      <div class="col-sm" :style="{ background: color}" >
        <img
          alt="Loginlog"
          src="@/assets/logo1.png"
          class="rounded mx-auto d-block"
        />
        <h1 class="row justify-content-center"> Inicie sesión </h1>
        <the-login></the-login>
      </div>
      <!-- <div class="col-sm">
          <img src="https://2.bp.blogspot.com/-zO8hwvt7iMk/XAVxt4aoQvI/AAAAAAAAwa0/_01xZj87g04GvxpSEKEGRVBEWggW-fC5gCLcBGAs/s1600/7T9364v.gif" alt="" height="937" width="447">
      </div> -->
    </div>
  </div>
</template>

<script>
import TheLogin from "@/components/auth/TheLogin";
export default {
     data() {
    return {
    color: '#2A9D8F',
    };
     },   

  components: {
    TheLogin,
  },
};
</script> 
<style scoped>

  
 
</style>
