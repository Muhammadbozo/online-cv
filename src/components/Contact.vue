<template>


    <b-card-text>
      <h1>
      
       
      
          Contact details: 
        || Cellphone: 0655293006 || 
         Email:Muhammadosman924@gmail.com 
         
         || <br>
         Linkedln: Muhammad Osman 
         
         || <br>
        Instagram: _muhammadosman_||</h1>
 >    


 <section>  

   <transition name="bounce">
     <img v-if="bounce" alt="bounce" src="../assets/imgs/telephone.jpg"/>
   </transition>
   <button @click="bounce = !bounce">bounce</button><br>
 </section>
         
    </b-card-text>


  


  

</template>
    

    <script>
    
    export default{
      name:'Contact',
      data() {
        return{
          bounce : false
        }

      }
    }

    
    
    </script>


<style>

h1{
   
  text-align: center;
  margin-top: 500px * 545px;
  margin-left: 60px;
  background-blend-mode: darken;
  background-color: aqua;
  margin: 100px;
  border-bottom-style: groove;
  
  
  margin-top: 1500px;


}

section{
 height:200px

}

 .bounce-enter-active{
   animation: bounce-in .5s;

 }
.bounce-leave-active{
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in{
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.5);
  }
  100%{
    transform: scale(1);
  }
}

</style>