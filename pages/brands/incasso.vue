<template>
  <div>
    <!-- Intro section -->

    <main-slot>
      <div class="container">
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
              title="Visit website"
              class="btn-white-outline-title"
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
      </div>
    </main-slot>
    <!-- Business idea section -->
    <StandForLabel
      :title="stand2.title"
      :text="stand2.text"
      :img="stand2.img"
      :imgMob="stand2.imgMob"
    />
    <!-- Ticker section -->

    <Marquee>
      BEST YOUNG <br class="d-md-none" /><span>SPECIALISTS</span>
    </Marquee>

    <!-- Let our hands section -->

    <InfoWrap
      :title="info.title"
      :text="info.text"
      :img="info.img"
      :imgMob="info.imgMob"
    />
    <!-- We are section -->

    <div class="we-are-section">
      <CardForLabel
        :title="card1.title"
        :img="card1.img"
        :imgMob="card1.imgMob"
      />
    </div>

    <!-- Discover section -->

    <div class="section-labels-card">
      <div class="container">
        <h2 class="h2 section-labels-card__title">Discover other labels</h2>
        <div class="row">
          <div
            v-for="(item, index) in labelsList"
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

<script>
import MainSlot from "@/components/MainSlot";
import StandForLabel from "~/components/StandForLabel.vue";
import Marquee from "~/components/Marquee.vue";
import InfoWrap from "@/components/InfoWrap";
import LabelCard from "@/components/LabelCard";
import Labels from "@/constants/labels";
import ContactSection from "@/components/ContactSection.vue";
import CardForLabel from "@/components/CardForLabel.vue";
import showOtherLabels from "@/mixins/showOtherLabels";

export default {
  components: {
    MainSlot,
    StandForLabel,
    Marquee,
    InfoWrap,
    LabelCard,
    ContactSection,
    CardForLabel,
  },
  mixins: [showOtherLabels],
  data() {
    return {
      stand2: {
        title: "business idea",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit. ",
        img: "img-00023.png",
        imgMob: "img-00022.png",
      },
      info: {
        title: "Let our hands do it for you",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas in est ut aliquet. Pellentesque ac blandit leo, nec porta velit.  ",
        img: "img-00021.jpg",
        imgMob: "img-00020.jpg",
      },
      card1: {
        title: "we are remote and flexible",
        img: "img-00025.png",
        imgMob: "img-00024.png",
      },
      labelsList: [],
    };
  },
  created() {
    this.showLabels(Labels, "Incasso hands", this.labelsList);
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
      width: 150rem;
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
