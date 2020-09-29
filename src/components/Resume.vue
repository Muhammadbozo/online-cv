<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div :style="myStyle2"><h2>EDUCATION</h2></div>
        </div>
        <div class="col-8">
          <div>
            <b-card
              title="Card title"
              sub-title="Card subtitle"
              class="border border-white"
              :style="myStyle"
            >
              <b-card-text>

                North West university  BSC IT and informatics 
                Student •2017-2020 I learnt a lot during this degree so I
                won't even try to name everything. I will just list the
                languages/tools I used. Java; Python; C & C++; SQL; Nodejs;
                 
                My University experience, My first year at varsity was very challenging. In
                fact, I even had 2 "first years". I spent most of my 1st first
                year being overwhelmed by the environment, the workload and by
                the fact that it felt like I was the only one in my class that
                hadn't done any programming in high school. At some point, I
                even felt that maybe Tech wasn't for me and that the university
                had made a mistake accepting me to study BSC IT.
                However, towards the end of the year, the more I met people who
                felt the same way I did, the more 'normal' I felt, and the more
                I was able to overcome my anxieties and perform better in my
                academics. I had a lot of ups and downs at university, but it was one of the best
                experiences and learning curves in my life.

              </b-card-text>

              <b-card-text>A second paragraph of text in the card.</b-card-text>
            </b-card>
          </div>
        </div>
      </div>
      <hr />

      <div class="row">
        <div class="col-4">
          <div :style="myStyle3"><h2>WORK</h2></div>
        </div>
        <div class="col-8">
          <div>
            <b-card
              title="Card title"
              sub-title="Card subtitle"
              class="border border-white"
            >
              <b-card-text>
                Not having too much work experience in the IT field , I basically have only practical experience 
               from the work done in University. I do however plan on taking short courses on websites such as udemy,Youtube 
               for the betterment and preperation of my future employment.

              </b-card-text>

              <b-card-text>A second paragraph of text in the card.</b-card-text>
            </b-card>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-4">
          <div :style="myStyle3"><h2>SKILLS</h2></div>
        </div>
        <div class="col-8">
          <div>
            <b-card
              title="Card title"
              sub-title="Card subtitle"
              class="border border-white"
            >
              <b-card-text>
                 I’m a IT guy who loves building mobile and web
                  applications. I enjoy working with the full technology stack,
                  from front to backend and everything inbetween. More
                  especially, I enjoy seeing myself do magic with code and the
                  reactions of the people I'm working with when they see my
                  work. Most importantly, I'm always eager to learn new
                  languages/frameworks. I'm originally from Potchefstroom. One of my
                  favourite things to do in the world is going to the beach and
                  being surrounded by water.I enjoy hiking,I also
                  enjoy Travelling, although I haven't YET seen much of the
                  world. Overall I’m passionate about technology and excited
                  about the future.

              </b-card-text>

              <b-card-text>A second paragraph of text in the card.</b-card-text>
            </b-card>
          </div>
        </div>
      </div>
      <div class="text-center">
        <b-button
          class="rounded-lg border border-dark "
          variant="dark"
          style="border: 5px"
          href="/about"
        >
          <router-link :style="myStyle4" to="/projects"
            >Check out my portfolio</router-link
          >
        </b-button>
      </div>
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
        marginTop: "170px",
      },
      myStyle3: {
        marginTop: "20px",
      },
      myStyle4: {
        color: "white",
      },
    };
  },
};
</script>
