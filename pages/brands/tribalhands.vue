<template>
  <div>
    <div class="label-tribalhands">
      <!-- Intro section -->

      <main-slot>
        <div class="container">
          <div class="flex-column-reverse flex-lg-row row">
            <div class="intro__title-wrapp col-12 col-lg-5">
              <h1 class="h1 intro__title">Tribalhands</h1>
              <div class="intro__text-holder">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <Button
                title="Visit website"
                class="btn-white-outline-title"
                :has-icon="true"
                type="button"
              />
            </div>
            <div class="col-12 col-lg-7">
              <div class="intro-img">
                <picture>
                  <source
                    srcset="@/assets/images/img-00026.png"
                    media="(max-width: 991px)"
                  />
                  <img
                    src="@/assets/images/img-00027.png"
                    alt="img description"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </main-slot>

      <!-- Stand for label Business idea -->

      <StandForLabel
        :title="stand2.title"
        :text="stand2.text"
        :img="stand2.img"
        :imgMob="stand2.imgMob"
      />

      <!-- Ticker section -->

      <Marquee>
        YOUR BEST <br class="d-md-none" /><span>DIGITAL</span>
        <br class="d-md-none" />TEAM
      </Marquee>

      <!-- InfoWrap We care section  -->

      <InfoWrap
        :title="info.title"
        :text="info.text"
        :btn="{ title: 'Visit website', to: '/' }"
        :img="info.img"
        :imgMob="info.imgMob"
      />

      <!-- Map section -->

      <div class="map">
        <div class="container">
          <div class="row g-0">
            <div class="col-12 col-md-5 d-flex align-items-center">
              <h2 class="h2 map__title">
                we are <br />
                remote and <br />
                flexible
              </h2>
            </div>
            <div class="col-12 col-md-7">
              <picture>
                <source
                  srcset="@/assets/images/img-00032.png"
                  media="(max-width: 992px)"
                />
                <img src="@/assets/images/img-00033.png" alt="location" />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <!-- CardForLabel component -->

      <CardForLabel :title="card.title" :img="card.img" :imgMob="card.imgMob" />
      <!-- Discover section -->

      <div class="section-labels-card">
        <div class="container">
          <h2 class="h2 section-labels-card__title">Discover other labels</h2>
          <div class="row">
            <div
              v-for="(item, index) in sliceLabelsArray"
              :key="index"
              class="col-md-6 col-lg-5 col-xl-4"
            >
              <LabelCard :card="item" />
            </div>
          </div>
        </div>
      </div>

      <!-- CotactSection component -->

      <ContactSection />
    </div>
  </div>
</template>

<script>
import InfoWrap from "@/components/InfoWrap.vue";
import StandForLabel from "@/components/StandForLabel.vue";
import CardForLabel from "@/components/CardForLabel.vue";
import LabelCard from "@/components/LabelCard.vue";
import Labels from "@/constants/labels";
import ContactSection from "@/components/ContactSection.vue";
export default {
  components: {
    StandForLabel,
    InfoWrap,
    CardForLabel,
    LabelCard,
    ContactSection,
  },
  data() {
    return {
      stand2: {
        title: "business idea",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. ",
        img: "img-00029.png",
        imgMob: "img-00028.png",
      },
      info: {
        title: "We create many types of projects",
        text: " We can build landing page, website,e-commerce, CRM system, platforms and applications ",
        img: "img-00031.png",
        imgMob: "img-00030.png",
      },
      card: {
        title: "Find your special team right now",
        img: "img-00035.png",
        imgMob: "img-00034.png",
      },
      labelsList: [],
    };
  },
  computed: {
    sliceLabelsArray() {
      return this.labelsList.slice(0, 2);
    },
  },

  created() {
    this.labelsList = Labels;
  },
};
</script>

<style lang="scss" scoped>
// Intro section

.intro-section {
  background: $tolopea;
  position: relative;
  overflow: hidden;
  &::before {
    @include media-breakpoint-down(lg) {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        184.53% 59.61% at 84.53% 10.34%,
        #0548b9 0%,
        rgba(4, 73, 186, 0) 100%
      );
    }
  }

  .intro__title-wrapp {
    // padding-top: 25.9rem;
    // padding-bottom: 15.8rem;
    .intro__title {
      color: $white;
      margin-bottom: 2.4rem;
      padding-bottom: 0;
      @include media-breakpoint-down(lg) {
        font-size: 5rem;
        line-height: 1.2;
      }
    }
    .intro__text-holder {
      padding-bottom: 0;
      margin-bottom: 3.2rem;
      max-width: 35rem;
      @include media-breakpoint-down(lg) {
        margin-bottom: 3.3rem;
      }
      p {
        color: $white;
        font-size: 2.4rem;
        line-height: 1.79;
        @include media-breakpoint-down(lg) {
          font-size: 2rem;
          line-height: 1.6;
        }
      }
    }
  }
  .intro-img {
    @include media-breakpoint-up(lg) {
      position: absolute;
      height: 100%;
      width: 133rem;
      right: 0%;
      bottom: 0;
    }

    @include media-breakpoint-down(lg) {
      position: relative;
      z-index: 2;
      margin-left: -2rem;
      margin-right: -2rem;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}

// Map

.map {
  padding-top: 5rem;
  overflow: hidden;
  margin-left: -2rem;
  margin-right: -2rem;
  @include media-breakpoint-up(md) {
    padding-top: 13.8rem;
  }
  .row {
    background: $aqua-haze;
  }
  &__title {
    margin-left: 2rem;
    @include media-breakpoint-up(md) {
      margin-left: 8rem;
    }
  }
  img {
    width: 100%;
    height: auto;
  }
}

// Discover section

.section-labels-card {
  padding-top: 17.7rem;
  padding-bottom: 21.2rem;
  @include media-breakpoint-down(lg) {
    padding-top: 10rem;
    padding-bottom: 7rem;
  }
  &__title {
    margin-bottom: 9.4rem;
    @include media-breakpoint-down(lg) {
      margin-bottom: 3.2rem;
    }
  }
}
</style>
