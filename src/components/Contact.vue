<template>


    <div class="page-loader" v-if="!isloaded">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>

  

  
    <b-card-text>
      <h1>
      
       <br>
       <br>

       <section>  

   <transition name="bounce">
     <img v-if="bounce" alt="bounce" src="../assets/imgs/ME.jpg"/>
   </transition>
   <button @click="bounce = !bounce">bounce</button><br>

   
 </section>
       <br>
       <br>
       <img src="../assets/imgs/telephone.jpg" alt="contact">
       <br>


      <v-button> Instagram </v-button> <link rel="Contact" href="">
    
      
       
      
        Contact details: 
        | Cellphone: 0655293006 | 
        | Email:Muhammadosman924@gmail.com | 
        | <br>  Linkedln: Muhammad Osman |
        | <br>  Instagram: _muhammadosman_||</h1>
 >    

<br>

<br>

<br>
 
 </b-card-text>
</div>

  
</template>
    


    <script>
    
    export default{
      name:'Contact',
      data()  {
        return{
          bounce : false
          
        },
        {
          isloaded: false
        },
        mounted() ; {
          document.onreadystatechange = () => {
            if(document.readyState == "complete"){
              this.isloaded = true;
            }
          }
        }
      },
    }

</script>




<style>

h1{
   
  text-align: center;
  margin-bottom: 0.5px ;
  margin-left: 0.6px;
  background-blend-mode: darken;
  background-color: aqua;
  margin: 0.5px;
  border-bottom-style: groove;
  align-content: center;
  
  
  margin-top: 15px;


}

.page-loader{
  display: flex;
  justify-content: center;
  align-items: center;
  position:fixed;
  top: 0;
  left: 0;
  widows: 100vw;
  height: 100vh;
  background-color: darkkhaki;
  z-index: 999;

}

  .cube{
    width: 40px;
    height: 40px;
    margin-right: 10px;

    @for i from 1 through length(colors){
      &:nth-child(#{$i}){
        backround-color:nth($colors,$i);

      }

    

  &:first-child{
    animation: left 1s infinite;
  }
  &:last-child{
    animation: right 1s infinite .5s;
  }
  
    }
  }
  
  

@keyframes left {
  40%{
    transform: translate(-60px);
  }
  50%{
    transform: translate(0);
  }
}

  @keyframes right {
  40%{
    transform: translate(-60px);
  }
  50%{
    transform: translate(0);
  }


  
}
  


section{
 height:0.5px;
 width:0.5px;
 border-image: 0.5px;
 margin-block-end: 0.5px;
 

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

.page-loader{
  display:flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color:white;
  z-index: 100;
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