<template>
        <div class="intro-section">
            <div class="container">
                <slot/>
            </div>
        </div>
</template>

<script>
    export default {
        name: "MainSlot",
    }
</script>

<style lang="scss" scoped>
.intro-section {
    .intro__title-wrapp {
        z-index: 1;
        margin-top: 240px;
        padding-bottom: 110px;
        @include media-breakpoint-down(lg) {
            margin-top: 0px;
            padding-bottom: 60px;
        }
        .intro__title {
            padding-bottom: 40px;
            @include media-breakpoint-down(md) {
                font-size: 50px;
                line-height: 60px;
                max-width: 335px;
            }
        } 
    }
    .h1 {
        font-size: 100px;
        line-height: 110px;
        text-transform: uppercase;
        width: 596px;
        max-width: 100%;
    }
}
    
</style>