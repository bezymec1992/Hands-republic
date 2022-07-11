<template>
  <div class="software-page">
    <!-- Software header section -->

    <section class="software-header">
      <div class="row flex-sm-row-reverse">
        <div class="col-12 col-sm-6 p-0">
          <div class="software-header__img-holder">
            <img
              class="software-header__img"
              src="../assets/images/0002.png"
              alt="header image"
            />
          </div>
        </div>
        <div class="col-12 col-sm-6 p-0">
          <div class="software-header__wrapper">
            <h1 class="software-header__title h1 text-uppercase">
              Software <br />
              hands republic
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!-- Software functionalities section -->

    <section class="functionalities">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 p-0">
            <div class="functionalities__text-holder">
              <h2 class="h2 functionalities__title text-uppercase">
                multipule <br />
                functionalities <br />
                at one place
              </h2>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <img
              class="functionalities__img d-md-none"
              src="../assets/images/0003.png"
              alt="image description"
            />
            <img
              class="functionalities__img d-none d-md-flex"
              src="../assets/images/0004.png"
              alt="image description"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="labels">
      <div class="container">
        <software-labels />
      </div>
    </section>
  </div>
</template>

<script>
import SoftwareLabels from "~/components/SoftwareLabels.vue";
export default {
  components: { SoftwareLabels },
};
</script>



<style lang="scss" scoped>
.software-page {
  background-color: $white;

  // Software header section

  .software-header {
    background-color: $mauve;

    &__img-holder {
      position: relative;
      padding-top: 98.7%;
      &::before {
        content: "";
        background: linear-gradient(
          0deg,
          #f0c7ff -7.94%,
          rgba(240, 199, 255, 0) 100%
        );
        position: absolute;
        width: 100%;
        height: 4rem;
        right: 0;
        bottom: 0;
        z-index: 2;
        @include media-breakpoint-up(sm) {
          display: none;
        }
      }

      @include media-breakpoint-up(sm) {
        padding-top: 100%;
      }
      @include media-breakpoint-up(md) {
        width: 100%;
        height: 100%;
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__wrapper {
      padding-top: 1.8rem;
      padding-left: 2rem;
      @include media-breakpoint-up(sm) {
        padding-top: 10rem;
        padding-left: 3rem;
      }
      @include media-breakpoint-up(xl) {
        padding-top: 24rem;
        padding-bottom: 15.7rem;
        padding-left: 8rem;
      }
    }
    &__title {
      font-size: 5rem;
      line-height: 1.2;
      margin-bottom: 3.982rem;

      @include media-breakpoint-up(lg) {
        font-size: 10rem;
        line-height: 1.1;
        margin-bottom: 5.1rem;
      }
    }
  }

  // Software functionalities section

  .functionalities {
    &__text-holder {
      padding-top: 6.8rem;
      padding-bottom: 4rem;
    }
    &__title {
      font-size: 5rem;
      line-height: 1.2;

      @include media-breakpoint-up(lg) {
        font-size: 10rem;
        line-height: 1.1;
      }
    }
    &__img {
      width: 100%;
      height: auto;

      @include media-breakpoint-up(md) {
        padding-top: 6.8rem;
      }
    }
  }
}
</style>
