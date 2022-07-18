<template>
  <div class="home-page">
    <main-slot>
      <div class="container">
        <div class="intro-main flex-column-reverse flex-lg-row row">
          <div class="intro__title-wrapp col-12 col-lg-6">
            <h1 class="h1 intro__title">
              Be with people who share your passion
            </h1>
            <Button
              title="Work together"
              class="btn-dark-outline-title"
              :has-icon="true"
              type="button"
            />
          </div>
          <div class="col-12 col-lg-6">
            <div class="intro-img">
              <picture>
                <source
                  srcset="@/assets/images/img-02.png"
                  media="(min-width: 768px)"
                />
                <img
                  src="@/assets/images/img-03.png"
                  alt="Be with people who share your passion"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </main-slot>
    <Stand
      class="style2"
      title1="Super charging"
      title2="business performance"
      :btn="{ title: 'About us', to: '/' }"
      text="We champion small businesses in the digital world and have over 1,700 localised experts to help you spread your reach."
    />
    <Marquee>
      OUR <span>HANDS</span> <br class="d-md-none" />
      ARE EVERYWHERE
    </Marquee>
    <VisualSection
      img="img-04.jpg"
      title="It’s all about TEAMING"
      :btn="{ title: 'Work together', to: '/working-together' }"
    />
    <div class="text-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2 class="h2">Your business and our Hands Republic</h2>
          </div>
          <div class="col-lg-6">
            <div class="text-holder d-none d-md-block">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="text-holder d-md-none">
              <p>
                We champion small businesses in the digital world and have over
                1,700 localised experts to help you spread your reach.
              </p>
            </div>
            <Button
              title="Our company"
              class="btn-dark d-md-none"
              :has-icon="true"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="section-labels-card">
      <div class="container">
        <div class="row justify-content-center">
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
    <QuoteSection
      text="To see all the cross-functional teaming that has led to developing exceptional team.blue products and enduring relationships makes me extremely proud."
      name="Jacob Nijholt"
      position="Chief Product Owner"
      img="img-01.jpg"
      img-mob="img-01.jpg"
    />
    <ContactSection />
  </div>
</template>

<script>
import MainSlot from "@/components/MainSlot";
import ContactSection from "@/components/ContactSection";
import Button from "@/components/Button";
import LabelCard from "@/components/LabelCard";
import Labels from "@/constants/labels";
import QuoteSection from "@/components/QuoteSection";
import Marquee from "@/components/Marquee";
import Stand from "@/components/Stand";
import VisualSection from "@/components/VisualSection";

export default {
  components: {
    ContactSection,
    Button,
    LabelCard,
    QuoteSection,
    MainSlot,
    Marquee,
    Stand,
    VisualSection,
  },
  data() {
    return {
      labelsList: [],
    };
  },
  created() {
    this.labelsList = Labels;
  },
  head() {
    return {
      bodyAttrs: {
        class: "header-absolute",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  overflow: hidden;

  .intro-section {
    padding-bottom: 15rem;

    @include media-breakpoint-down(lg) {
      padding-bottom: 5rem;
    }

    .container {
      position: relative;
    }

    .intro__title-wrapp {
      position: relative;
      margin-top: 22rem;
      z-index: 3;

      &::before {
        @include media-breakpoint-up(lg) {
          content: "";
          position: absolute;
          left: -5rem;
          top: -5rem;
          width: 32rem;
          height: 32rem;
          background: #ffeeee;
          border-radius: 50%;
          z-index: -1;
        }
      }

      @include media-breakpoint-down(lg) {
        padding-top: 40rem;
        margin-top: 0;
      }

      @include media-breakpoint-down(sm) {
        padding-top: 42rem;
      }
    }

    .intro-img {
      position: absolute;
      overflow: hidden;
      top: -6.3rem;
      right: -10rem;
      width: 82rem;

      @include media-breakpoint-down(md) {
        top: -6.5rem;
        right: 0rem;
        width: 64rem;
        margin-right: -3rem;
      }

      @include media-breakpoint-down(sm) {
        max-width: 62rem;
        margin-left: -4rem;
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  .text-section {
    padding-top: 22.6rem;
    padding-bottom: 22.5rem;

    @include media-breakpoint-down(md) {
      padding-top: 10rem;
      padding-bottom: 12rem;
    }

    .h2 {
      @include media-breakpoint-down(lg) {
        margin-bottom: 3.2rem;
      }
    }

    .text-holder {
      font-size: 2.4rem;
      line-height: 1.7;

      @include media-breakpoint-down(md) {
        margin-bottom: 3.2rem;
        font-size: 2rem;
      }

      p {
        &:not(:last-child) {
          @include media-breakpoint-up(lg) {
            margin-bottom: 6rem;
          }
        }
      }
    }
  }

  .section-labels-card {
    padding-bottom: 6rem;

    @include media-breakpoint-down(md) {
      padding-bottom: 4rem;
    }

    div[class^="col-"] {
      &:nth-child(2) {
        @include media-breakpoint-up(xl) {
          padding-top: 4rem;
        }
      }
    }
  }
}
</style>
