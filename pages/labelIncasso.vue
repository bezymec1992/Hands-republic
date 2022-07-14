<template>
  <div>
    <!-- Intro section -->

    <main-slot>
      <template slot>
        <div class="flex-column-reverse flex-lg-row row">
          <div class="intro__title-wrapp col-12 col-lg-8">
            <h1 class="h1 intro__title">incasso hands</h1>
            <div class="intro__text-holder">
              <p>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit.
              </p>
            </div>

            <Button
              title="Work together"
              class="btn-dark-outline-title intro__btn"
              :has-icon="true"
              type="button"
            />
          </div>
          <div class="col-12 col-lg-4">
            <div class="intro-img">
              <picture>
                <source
                  srcset="@/assets/images/img-00017.png"
                  media="(max-width: 991px)"
                />
                <img src="@/assets/images/img-00018.png" alt="MDN" />
              </picture>
            </div>
          </div>
        </div>
      </template>
    </main-slot>
    <!-- Let our hands section -->
    <InfoWrap
      :title="info.title"
      :text="info.text"
      :img="info.img"
      :imgMob="info.imgMob"
    />

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
    <ContactSection />
  </div>
</template>


<script >
import MainSlot from "@/components/MainSlot";
import InfoWrap from "@/components/InfoWrap";
import LabelCard from "@/components/LabelCard";
import Labels from "@/constants/labels";
import ContactSection from "@/components/ContactSection.vue";
export default {
  components: {
    MainSlot,
    InfoWrap,
    LabelCard,

    ContactSection,
  },
  data() {
    return {
      info: {
        title: "Let our hands do it for you",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit.  ",
        img: "img-00021.jpg",
        imgMob: "img-00020.jpg",
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
  background: $blue-stone;
  position: relative;
  overflow: hidden;
  .intro__title-wrapp {
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
      width: 110rem;
      right: 0%;
      bottom: 0;
    }

    @include media-breakpoint-down(lg) {
      margin-left: -2rem;
      margin-right: -2rem;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}

// Business idea section
</style>
