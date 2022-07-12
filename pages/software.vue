<template>
  <div class="software-page">
    <!-- Software header section -->

    <section class="software-header">
      <div class="row flex-sm-row-reverse">
        <div class="col-12 col-sm-6">
          <div class="software-header__img-holder">
            <img
              class="software-header__img"
              src="../assets/images/img-0002.png"
              alt="header image"
            />
          </div>
        </div>
        <div class="col-12 col-sm-6 software-header__wrapper">
          <h1 class="software-header__title h1 text-uppercase">
            Software <br />
            hands republic
          </h1>
          <Button
            title="Work together"
            class="software-header__btn"
            type="nuxt-link"
            to="/contact"
            :has-icon="true"
          >
          </Button>
        </div>
      </div>
    </section>

    <!-- Software functionalities section -->

    <section class="functionalities">
      <div class="row">
        <div class="col-12 col-md-6 functionalities__text-holder">
          <h2 class="h2 functionalities__title text-uppercase">
            multipule <br />
            functionalities <br />
            at one place
          </h2>
        </div>
        <div class="col-12 col-md-6">
          <img
            class="functionalities__img d-md-none"
            src="../assets/images/img-0003.png"
            alt="image description"
          />
          <img
            class="functionalities__img d-none d-md-flex"
            src="../assets/images/img-0004.png"
            alt="image description"
          />
        </div>
      </div>
    </section>

    <!-- Labels section -->

    <section class="labels">
      <div class="container">
        <software-labels />
      </div>
    </section>

    <!-- Smart section -->

    <section class="smart">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 d-flex align-items-center">
            <div class="smart__body">
              <h2 class="smart__title h2">
                Smart <br />
                Match making
              </h2>
              <img
                class="smart__img d-md-none"
                src="../assets/images/img-0005.png"
                alt="image description"
              />
              <div class="smart__text-holder">
                <p class="smart__text mb-0">
                  Have a specified request and need an implementer? Send your
                  request and we will find someone you really need.
                </p>
              </div>
            </div>
          </div>
          <div
            class="
              col-12 col-md-6
              justify-content-center
              align-items-center
              d-none d-md-flex
            "
          >
            <img
              class="smart__img"
              src="../assets/images/img-0006.png"
              alt="image description"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Flexible-remote section -->

    <section class="flexible-remote">
      <div class="row">
        <div class="col-12 col-sm-6 p-0">
          <img
            class="flexible-remote__img d-md-none"
            src="../assets/images/img-0007.png"
            alt="image description"
          />
          <img
            class="flexible-remote__img d-none d-md-flex"
            src="../assets/images/img-0008.png"
            alt="image description"
          />
        </div>
        <div class="col-12 col-sm-6 d-flex align-items-center">
          <div class="flexible-remote__wrapper">
            <h2 class="flexible-remote__title h2 text-uppercase">
              flexible and <br />
              remote
            </h2>
            <div class="flexible-remote__text-holder">
              <p class="flexible-remote__text">
                Select your available periods and work where you want
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join the future section -->

    <!-- Dashboard section -->

    <section class="dashboard">
      <div class="container">
        <div class="row dashboard__wrapper">
          <div class="col-12">
            <div class="dashboard__body">
              <h3 class="dashboard__title h2 text-uppercase">dashboard</h3>
              <p class="dashboard__text">
                Check requests, tasks, milestones, users and agenda
              </p>
            </div>
          </div>
          <div class="col-12 px-0">
            <img
              class="dashboard__img d-md-none"
              src="../assets/images/img-0009.png"
              alt="image description"
            />
            <img
              class="dashboard__img d-none d-md-flex"
              src="../assets/images/img-00010.png"
              alt="image description"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Manage section -->

    <section class="manage">
      <div class="container">
        <div class="row flex-md-row-reverse">
          <div class="col-12 col-md-6">
            <div class="manage__body">
              <h3 class="manage__title h2 text-uppercase">
                Manage agenda <br />
                & availibility
              </h3>
              <p class="manage__subtitle">
                Manage how much and when will you work.
              </p>
              <img
                class="manage__img d-md-none"
                src="../assets/images/img-00011.png"
                alt="image description"
              />

              <p class="manage__text">
                Create events and meetings with your team member or clients. You
                can also create closed events or just reminder for yourself
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6 manage__img-holder">
            <img
              class="manage__img d-none d-md-flex"
              src="../assets/images/img-00012.png"
              alt="image description"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Control section -->

    <section class="control">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 d-flex align-items-center px-0">
            <div class="control__body">
              <h2 class="control__title h2">
                Control <br />
                and security
              </h2>

              <div class="control__text-holder">
                <p class="control__text">
                  We care about your personal information and that's why we have
                  created a lot of additional security moduls which help to make
                  everything safe
                </p>
              </div>
            </div>
          </div>
          <div
            class="
              col-12 col-md-6
              justify-content-center
              align-items-center
              px-0
            "
          >
            <img
              class="control__img d-md-none"
              src="../assets/images/img-00013.png"
              alt="image description"
            />
            <img
              class="smart__img d-none d-md-flex"
              src="../assets/images/img-00014.png"
              alt="image description"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Join the future section -->

    <section class="join-future">
      <div class="row">
        <div class="col-12 col-sm-6 p-0">
          <img
            class="join-future__img d-md-none"
            src="../assets/images/img-00015.jpg"
            alt="image description"
          />
          <img
            class="join-future__img d-none d-md-flex"
            src="../assets/images/img-00016.jpg"
            alt="image description"
          />
        </div>
        <div class="col-12 col-sm-6 d-flex align-items-center px-0">
          <div class="join-future__wrapper">
            <h2 class="join-future__title h2 text-uppercase d-md-none">
              Join the future <br />
              right now
            </h2>
            <h2 class="join-future__title h2 text-uppercase d-none d-md-block">
              Join the <br />
              future right <br />
              now
            </h2>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact section-->
    <section class="contact">
      <div class="container">
        <contact-section />
      </div>
    </section>
  </div>
</template>



<script>
import Button from "~/components/Button.vue";
import ContactSection from "~/components/ContactSection.vue";
import SoftwareLabels from "~/components/SoftwareLabels.vue";
export default {
  components: { SoftwareLabels, Button, ContactSection },
};
</script>



<style lang="scss" scoped>
.software-page {
  background-color: $white;

  // Header section

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
      padding-bottom: 6.798rem;
      @include media-breakpoint-up(md) {
        margin: auto 0;
        padding-left: 8rem;
      }
      @include media-breakpoint-up(xl) {
        padding-left: 8rem;
      }
    }
    &__title {
      font-size: 5rem;
      line-height: 1.2;
      margin-bottom: 4rem;

      @include media-breakpoint-up(lg) {
        font-size: 10rem;
        line-height: 1.1;
        margin-bottom: 5.1rem;
      }
    }
    // &__btn {
    //   border: 0.1rem solid $black;
    //   width: 22rem;
    //   height: 6.2rem;
    //   border-radius: 3.6rem;
    // }
  }

  // Functionalities section

  .functionalities {
    .container {
      @include media-breakpoint-up(md) {
        padding-left: 8rem;
        padding-right: 8rem;
      }
    }
    &__text-holder {
      padding-top: 6.8rem;
      padding-bottom: 4rem;
      padding-left: 2rem;
      @include media-breakpoint-up(md) {
        padding-left: 8rem;
        margin: auto 0;
      }
    }
    &__title {
      font-size: 5rem;
      line-height: 1.2;

      // @include media-breakpoint-up(lg) {
      //   font-size: 8rem;
      //   line-height: 1.1;
      // }
      @include media-breakpoint-up(xl) {
        font-size: 10rem;
      }
    }
    &__img {
      width: 100%;
      height: auto;
      padding-left: 2rem;

      @include media-breakpoint-up(md) {
        padding-top: 6.8rem;
      }
    }
  }

  // Labels section

  .labels {
    .container {
      @include media-breakpoint-up(md) {
        padding-left: 4rem;
        // padding-right: 8rem;
      }
    }
  }

  // Smart section

  .smart {
    padding-top: 5.2rem;
    padding-bottom: 8rem;
    @include media-breakpoint-up(md) {
      padding-top: 20.6rem;
      padding-bottom: 11.6rem;
    }
    .container {
      @include media-breakpoint-up(md) {
        // padding-left: 8rem;
        // padding-right: 8rem;
      }
    }

    &__title {
      font-size: 5rem;
      line-height: 1;
      margin-bottom: 1.4rem;
      @include media-breakpoint-up(md) {
        margin-bottom: 2.8rem;
      }

      @include media-breakpoint-up(xl) {
        font-size: 10rem;
        line-height: 1.1;
      }
    }
    &__text {
      font-size: 2rem;
      line-height: 1.6;

      @include media-breakpoint-up(lg) {
        font-size: 2.4rem;
        line-height: 1.83;
      }
    }
    &__img {
      width: 100%;
      height: auto;
      margin-bottom: 2.8rem;
      @include media-breakpoint-up(md) {
        margin-bottom: 0;
      }
    }
  }

  // Flexible section

  .flexible-remote {
    &__img {
      width: 100%;
      height: auto;
      margin-bottom: 3.2rem;
    }

    &__title {
      font-size: 5rem;
      line-height: 1;
      margin-bottom: 1.6rem;
      @include media-breakpoint-up(md) {
        margin-bottom: 4.6rem;
      }

      @include media-breakpoint-up(xl) {
        font-size: 10rem;
        line-height: 1.1;
      }
    }
    &__wrapper {
      padding-left: 2rem;

      @include media-breakpoint-up(sm) {
      }
      @include media-breakpoint-up(xl) {
        padding-left: 8rem;
      }
    }
    &__text-holder {
      max-width: 45rem;
    }
    &__text {
      font-size: 2rem;
      line-height: 1.6;
      margin: 0;
      @include media-breakpoint-up(lg) {
        font-size: 2.4rem;
        line-height: 1.83;
      }
    }
  }

  // Dashboard section

  .dashboard {
    padding-top: 10rem;
    &__wrapper {
      @include media-breakpoint-up(md) {
        text-align: center;
      }
    }

    &__body {
    }
    &__title {
      font-size: 5rem;
      line-height: 1;
      margin-bottom: 1.6rem;
      @include media-breakpoint-up(md) {
        margin-bottom: 4rem;
      }

      @include media-breakpoint-up(xl) {
        font-size: 10rem;
        line-height: 1.1;
      }
    }
    &__subtitle {
      font-size: 2rem;
      line-height: 1.6;
      margin-bottom: 2.24rem;
      @include media-breakpoint-up(md) {
        font-size: 2.4rem;
        line-height: 1.83;
        margin-bottom: 2.8rem;
      }
    }
    &__text {
      font-size: 2rem;
      line-height: 1.6;
      margin-bottom: 2.4rem;

      @include media-breakpoint-up(md) {
        font-size: 2.4rem;
        line-height: 1.83;
        margin-bottom: 2.8rem;
      }
    }
    &__img-holder {
      margin: auto 0;
    }
    &__img {
      width: 100%;
      height: auto;
      margin-bottom: 3.2rem;

      @include media-breakpoint-up(md) {
        // margin-bottom: 0;
      }
    }
  }

  // Manage section

  .manage {
    padding-top: 10rem;
    &__title {
      font-size: 5rem;
      line-height: 1;
      margin-bottom: 1.6rem;
      @include media-breakpoint-up(md) {
        margin-bottom: 1rem;
      }

      @include media-breakpoint-up(xl) {
        font-size: 10rem;
        line-height: 1.1;
      }
    }
    &__subtitle {
      font-size: 2rem;
      line-height: 1.6;
      margin-bottom: 2.4rem;
      @include media-breakpoint-up(md) {
        font-size: 2.4rem;
        line-height: 1.83;
        margin-bottom: 2.8rem;
      }
    }
    &__text {
      font-size: 2rem;
      line-height: 1.6;

      @include media-breakpoint-up(md) {
        font-size: 2.4rem;
        line-height: 1.83;
      }
    }
    &__img-holder {
      margin: auto 0;
    }
    &__img {
      width: 100%;
      height: auto;
    }
  }

  // Control section

  .control {
    padding-top: 10rem;

    @include media-breakpoint-up(lg) {
      padding-top: 16rem;
    }
    .container {
      @include media-breakpoint-up(md) {
        // padding-left: 8rem;
        // padding-right: 8rem;
      }
    }
    &__body {
      @include media-breakpoint-up(md) {
        padding-left: 8rem;
      }
    }
    &__title {
      font-size: 5rem;
      line-height: 1;
      margin-bottom: 1.4rem;
      @include media-breakpoint-up(md) {
        margin-bottom: 2.8rem;
      }

      @include media-breakpoint-up(xl) {
        font-size: 10rem;
        line-height: 1.1;
      }
    }
    &__text {
      font-size: 2rem;
      line-height: 1.6;
      margin-bottom: 0.8rem;

      @include media-breakpoint-up(lg) {
        font-size: 2.4rem;
        line-height: 1.83;
      }
    }
    &__img {
      width: 100%;
      height: auto;
    }
  }

  // Join the future section

  .join-future {
    padding-top: 10rem;
    padding-bottom: 10rem;

    &__img {
      width: 100%;
      height: auto;
      margin-bottom: 3.2rem;
      @include media-breakpoint-up(md) {
        margin-bottom: 0;
      }
    }

    &__title {
      font-size: 5rem;
      line-height: 1;
      @include media-breakpoint-up(md) {
      }
      @include media-breakpoint-up(xl) {
        font-size: 10rem;
        line-height: 1.1;
      }
    }
    &__wrapper {
      padding-left: 2rem;

      @include media-breakpoint-up(lg) {
        padding-left: 8rem;
      }
    }
  }

  // Contact section

  .contact {
    .container {
      padding: 0;
      @include media-breakpoint-up(lg) {
      }
    }
  }
}
</style>
