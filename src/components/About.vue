<template>
  <div>
    <div>
      <b-card
        overlay
        :img-src="require('../assets/imgs/About.jpg')"
        img-height="700"
        img-alt="Card Image"
      >
        <div class="container">
          <div class="row">
            <div class="col-8 ">
              <b-card title="ABOUT ME" :style="myStyle">
                <b-card-text>
                  I’m an IT guy who loves building mobile and web
                  applications.My high school being Potchefstroom Boys high
                  and not offering an IT subject I started this degree with basically
                  no knowledge. Most importantly, I'm always eager to learn new
                  languages/frameworks. I'm originally from Potchefstroom. One of my
                  favourite things to do is to go to the beach and
                  be surrounded by the water.I enjoy hiking occassionally. I also
                  enjoy Travelling, although I haven't YET seen much of the
                  world. Overall I’m passionate about technology and excited
                  about the future.
                </b-card-text>

               
                >

                <a href="#" class="card-link"
                  ><router-link to="/resume">VIEW RESUME</router-link></a
                >
              </b-card>
            </div>
            <div class="col-4">
              <div :style="myStyle2">
                <b-avatar size="10rem"></b-avatar>
              </div>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myStyle: {
        marginTop: "150px",
        backgroundColor: "#ffffff00",
      },
      myStyle2: {
        marginTop: "150px",
        marginLeft: "60px",
      },
    };
  },
};
</script>
