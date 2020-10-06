<template>
  <div>
    <div>
      <b-card
        overlay
        :img-src="require('../assets/imgs/Masthead.jpg')"
        img-height="700"
        img-alt="Card Image"
        text-variant="white"
      >
        <div class="container" style="opacity:1">
          <b-jumbotron
            class="bg-transparent p-3 rounded-lg border border-dark text-center text-dark"
            style="margin-top: 100px"
            text-variant="black"
          >
            <template v-slot:header
              >Muhammad <br />
              Osman</template
            >

            <template v-slot:lead style="color: black">
              Hi there, I'm a 22 year old BSC IT Student.
              <br />
              I created this cv using Vue js and it is hosted on Firebase.
              I put my cv online for your viewing pleasure.
               
            </template>

            <hr class="my-4" />
            <div>
              <span class="ml-2">
                <b-button
                  class="rounded-lg border border-dark "
                  variant="dark"
                  style="border: 5px"
                  href="/about"
                >
                  <router-link to="/about">About</router-link>
                </b-button>
              </span>
            </div>
          </b-jumbotron>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
