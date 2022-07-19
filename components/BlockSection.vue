<template>
    <div class="block-section">
        <div class="container">
            <div class="block__wrapper">
                <h2 class="h2 block__title">
                    <slot name="title"/>
                    <!-- {{title}} -->
                </h2>
                <p class="block__text">
                    {{text}}
                </p>
                <picture class="block__img d-flex  align-items-md-center">
                    <source :srcset="require(`@/assets/imgs/${imgMob}`)" media="(max-width: 550px)"/>
                    <img :src="require(`@/assets/imgs/${img}`)" alt="img"/>
                </picture>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "block",
    props: {
		title: {
			type: String,
			default: "title"
		},
		text: {
			type: String,
			default: "description"
		},
		img: {
			type: String,
			default: "block-img.png"
		},
        imgMob: {
			type: String,
			default: "block-img-mb.png"
		},
    }
}
</script>

<style lang="scss" scoped>
    .block-section {
        padding-top: 18rem;
        padding-bottom: 10rem;
        @include media-breakpoint-down(md) {
            padding-top: 8rem;
        }
        .block__wrapper {
            text-align: center;
            @include media-breakpoint-down(md) {
                text-align: left;
            }
            .block__title {
                margin-bottom: 3.2rem;
            }
            .block__text{
                max-width: 80rem;
                margin: 0 auto 8.5rem;
                font-size: 2.4rem;
                line-height: 4rem;
                @include media-breakpoint-down(md) {
                    font-size: 2rem;
                    line-height: 3.2rem;
                    margin-bottom: 2.4rem;
                }
            }
            .block__img {
                @include media-breakpoint-down(md) {
                    margin-left: -2rem;
                    margin-right: -2rem;
                }
                img {
                    width: 100%;
                    height: auto;
                }
                
            }
        }
    }
    
</style>