<template>
  <div class="software-labels">
    <ul class="row software-labels__list list-unstyled mb-0">
      <li
        class="col-12 d-flex col-md-6 col-xxl-3 software-labels__content-holder"
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="../assets/images/icon-0001.svg"
              media="(max-width: 768px)"
              width="33.29"
              height="37.45"
            />
            <img
              src="../assets/images/icon-0001.svg"
              alt="match-making"
              width="40"
              height="45"
            />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">match making</h3>
        </div>
      </li>
      <li
        class="col-12 d-flex col-md-6 col-xxl-3 software-labels__content-holder"
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="../assets/images/icon-0002.svg"
              media="(max-width: 768px)"
              width="25"
              height="30"
            />
            <img
              src="../assets/images/icon-0002.svg"
              alt="security"
              width="30"
              height="36"
            />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">security</h3>
        </div>
      </li>
      <li
        class="col-12 d-flex col-md-6 col-xxl-3 software-labels__content-holder"
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="../assets/images/icon-0003.svg"
              media="(max-width: 768px)"
              width="27.5"
              height="35"
            />
            <img
              src="../assets/images/icon-0003.svg"
              alt="task-manager"
              width="33"
              height="42"
            />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">task manager</h3>
        </div>
      </li>
      <li
        class="col-12 d-flex col-md-6 col-xxl-3 software-labels__content-holder"
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="../assets/images/icon-0004.svg"
              media="(max-width: 768px)"
              width="33.33"
              height="33.34"
            />
            <img
              src="../assets/images/icon-0004.svg"
              alt="chat"
              width="40"
              height="40"
            />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">chat</h3>
        </div>
      </li>
    </ul>

    <ul class="row d-lg-flex justify-content-between list-unstyled mb-0">
      <li
        class="col-12 d-flex col-md-6 col-xxl-3 software-labels__content-holder"
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="../assets/images/icon-0005.svg"
              media="(max-width: 768px)"
              width="29.17"
              height="29.17"
            />
            <img
              src="../assets/images/icon-0005.svg"
              alt="data-sharing"
              width="35"
              height="35"
            />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">data sharing</h3>
        </div>
      </li>
      <li
        class="col-12 d-flex col-md-6 col-xxl-3 software-labels__content-holder"
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="../assets/images/icon-0006.svg"
              media="(max-width: 768px)"
              width="33.33"
              height="33.34"
            />
            <img
              src="../assets/images/icon-0006.svg"
              alt="agenda"
              width="40"
              height="40"
            />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">agenda</h3>
        </div>
      </li>
      <li
        class="col-12 d-flex col-md-6 col-xxl-3 software-labels__content-holder"
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="../assets/images/icon-0007.svg"
              media="(max-width: 768px)"
              width="31.67"
              height="31.67"
            />
            <img
              src="../assets/images/icon-0007.svg"
              alt="control"
              width="38"
              height="38"
            />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">control</h3>
        </div>
      </li>
      <li
        class="col-12 d-flex col-md-6 col-xxl-3 software-labels__content-holder"
      >
        <div class="software-labels__icon-holder">
          <picture>
            <source
              srcset="../assets/images/icon-0008.svg"
              media="(max-width: 768px)"
              width="25"
              height="40"
            />
            <img
              src="../assets/images/icon-0008.svg"
              alt="remote"
              width="30"
              height="48"
            />
          </picture>
        </div>
        <div class="software-labels__text-holder text-uppercase">
          <h3 class="software-labels__title h3">remote</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SoftwareLabels",
};
</script>

<style lang="scss" scoped>
.software-labels {
  padding-top: 8.481rem;
  // padding-bottom: 9.7rem;
  @include media-breakpoint-up(md) {
    padding-top: 17.3rem;
  }
  .container {
    padding-left: 6rem;
  }
  &__list {
    @include media-breakpoint-up(md) {
      // margin-bottom: 3.5rem;
    }
  }
  &__content-holder {
    margin-bottom: 2.5rem;

    @include media-breakpoint-up(md) {
      margin-bottom: 0;
    }
  }
  &__icon-holder {
    img {
      margin-top: 1rem;
    }
  }
  &__text-holder {
    margin-left: 2.936rem;
    @include media-breakpoint-up(md) {
      margin-left: 2.6rem;
    }
  }
  &__title {
    font-size: 3.2rem;
    line-height: 1.857;
    @include media-breakpoint-up(md) {
      font-size: 4rem;
      line-height: 1.5;
    }
  }
}
</style>