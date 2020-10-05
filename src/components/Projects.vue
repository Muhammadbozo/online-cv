<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            :style="myStyle"
            v-b-hover="handleHover1"
            class="border rounded "
          >
            <b-card
              v-if="isHovered1"
              overlay
              text-variant="dark"
              :img-src="require('../assets/imgs/hover2.jpg')"
              img-alt="Card Image"
              img-height="250"
              title="Creation of a online business"
              sub-title="Made with Visual studio code"
              class="text-center"
            >
              <b-button
                :style="myStyle2"
                variant="outline-warning"
                size="lg"
                v-b-modal.my-modal
                >Learn More</b-button
              >
            </b-card>

            <b-card
              v-else
              overlay
              text-variant="black"
              img-src="https://picsum.photos/900/250/?image=3"
              img-height="250"
              img-alt="Card Image"
              class="text-center"
              style="opacity: 0.7"
            >
              <div>
                <h2 :style="myStyle3">Online</h2>
              </div>
            </b-card>

            <b-modal
              id="my-modal"
              size="lg"
              ok-only
              ok-title="Close"
              ok-variant="warning"
            >
              <template v-slot:modal-title>
                PROJECT1
              </template>
              <div class="d-block text-center">
                <b-img
                  src="'../assets/imgs/area code on client mnagement.PNG.jpg'"
                  fluid
                  alt="Responsive image"
                ></b-img>
              </div>
              <hr />
              <div>
                <div>
                  <b-card title="Kyalami Motors" sub-title="Online motor car sales company">
                    <b-card-text>
                      Created a online business in second year univeristy
                      <em>Kyalami Motors </em> of Potchefstroom with its SQL database of clients and full on running service
                    </b-card-text>

                    <b-card-text
                      >A second paragraph of text in the card.</b-card-text
                    >

                    <a href="#" class="card-link">VISIT PAGE</a>
                  </b-card>
                </div>
              </div>
            </b-modal>
          </div>
        </div>
        <div class="col">
          <div
            :style="myStyle"
            v-b-hover="handleHover2"
            class="border rounded "
          >
            <b-card
              v-if="isHovered2"
              overlay
              text-variant="dark"
              :img-src="require('../assets/imgs/hover2.jpg')"
              img-alt="Card Image"
              img-height="250"
              title="Image Overlay"
              sub-title="Subtitle"
              class="text-center"
            >
              <b-button :style="myStyle2" variant="warning" size="lg"
                >Warning</b-button
              >
            </b-card>
            <b-card
              v-else
              overlay
              text-variant="white"
              img-src="https://picsum.photos/900/250/?image=3"
              img-height="250"
              img-alt="Card Image"
              title="Image Overlay"
              sub-title="Subtitle"
            >
              <b-card-text>
                Some quick example text to build on the card and make up the
                bulk of the card's content.
              </b-card-text>
            </b-card>
          </div>
        </div>
        <div class="col">
          <div
            :style="myStyle"
            v-b-hover="handleHover3"
            class="border rounded "
          >
            <b-card
              v-if="isHovered3"
              overlay
              text-variant="dark"
              :img-src="require('../assets/imgs/hover2.jpg')"
              img-alt="Card Image"
              img-height="250"
              title="Image Overlay"
              sub-title="Subtitle"
              class="text-center"
            >
              <b-button :style="myStyle2" variant="warning" size="lg"
                >Warning</b-button
              >
            </b-card>
            <b-card
              v-else
              overlay
              text-variant="white"
              img-src="https://picsum.photos/900/250/?image=3"
              img-height="250"
              img-alt="Card Image"
              title="Image Overlay"
              sub-title="Subtitle"
            >
              <b-card-text>
                Some quick example text to build on the card and make up the
                bulk of the card's content.
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered1: false,
      isHovered2: false,
      isHovered3: false,
      myStyle: {
        marginTop: "150px",
      },
      myStyle2: {
        marginTop: "50px",
      },
      myStyle3: {
        marginTop: "80px",
        color: "white",
      },
    };
  },
  methods: {
    handleHover1(hovered) {
      this.isHovered1 = hovered;
    },
    handleHover2(hovered) {
      this.isHovered2 = hovered;
    },
    handleHover3(hovered) {
      this.isHovered3 = hovered;
    },
  },
};
</script>
