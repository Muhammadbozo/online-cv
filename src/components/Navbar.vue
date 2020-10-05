<template>
  <div class="fixed-top" :style="myStyle">
    <b-nav pills align="center" sticky>
      <b-nav-item
        class="bg-transparent rounded-lg border border-dark text-center text-dark"
        :style="myStyle2"
        ><router-link :style="myStyle3" to="/">HOME</router-link></b-nav-item
      >
      <b-nav-item
        class="bg-transparent rounded-lg border border-dark text-center text-dark"
        :style="myStyle2"
        ><router-link :style="myStyle3" to="/about"
          >ABOUT</router-link
        ></b-nav-item
      >
      <b-nav-item
        class="bg-transparent rounded-lg border border-dark text-center text-dark"
        :style="myStyle2"
        ><router-link :style="myStyle3" to="/resume"
          >RESUME</router-link
        ></b-nav-item
      >
      <b-nav-item
        class="bg-transparent rounded-lg border border-dark text-center text-dark"
        :style="myStyle2"
        ><router-link :style="myStyle3" to="/projects"
          >PROJECTS</router-link
        ></b-nav-item
      >
      <b-nav-item
        class="bg-transparent rounded-lg border border-dark text-center text-dark"
        :style="myStyle2"
        ><router-link :style="myStyle3" to="/contact"
          >CONTACT ME</router-link
        ></b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    
      myStyle: {
        backgroundColor: "#2F4F4F",
        paddingTop: "10px",
        paddingBottom: "10px",
      },
      myStyle2: {
        marginRight: "10px",
      },
      myStyle3: {
        color: "white",
      },
    };
  },
};
</script>
