<template>
    <div class="container">
        <div class="quote">
            <div class="row">
                <div class="quote__info col-12 col-xl-6 order-xl-1 order-2">
                    <p class="quote__text">
                        {{text}}
                    </p>
                    <span class="quote__span"></span>
                    <div class="quote__bio d-flex">
                        <p class="quote__name">
                            {{name}}
                        </p>
                        <p class="quote__position">
                            {{position}}
                        </p>
                    </div>
                </div>
                <div class="quote__picture col-12 col-xl-6 as order-xl-2 order-1">
                    <picture class="quote-img">
                        <source :srcset="require(`@/assets/imgs/${imgMob}`)" media="(max-width: 767px)"/>
                        <img :src="require(`@/assets/imgs/${img}`)" alt="title" />
                    </picture>
                    <picture class="quote-dots">
                            <source srcset="@/assets/imgs/quote.png" media="(max-width: 1200px)">
                            <img src="@/assets/imgs/quote-desk.png" alt="dots">
                    </picture>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
		text: {
			type: String,
			default: "description"
		},
        name: {
			type: String,
			default: "name"
		},
        position: {
			type: String,
			default: "position"
		},
		img: {
			type: String,
			default: "quote-img.jpg"
		},
        imgMob: {
			type: String,
			default: "quote-mb.jpg"
		},
    }
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 1440px;
    overflow: hidden;
}
    .quote {
        max-width: 1200px;
        margin: 0 auto;
        padding-bottom: 180px;
        position: relative;
        padding: 75px 20px 180px;
        
        .quote__info {
            padding: 0;
        }
        .quote-dots {
            position: absolute;
            top: 150px;
            left: -70px;
            z-index: -1;
        }
        @include media-breakpoint-down(xl) {
        .quote-dots {
            z-index: 1;
            top: 25px;
            left: 20%;
        }
            .quote-img{
                display: flex;
                justify-content: center;
            }
            .quote__text {
                padding-right: 0;
                text-align: center;
                margin-top: 40px;
            }
            .quote__bio {
                justify-content: center;
            }
            .quote__span {
                margin: 24px auto;
            }
        }
        @include media-breakpoint-down(md) {
            padding-bottom: 100px;
            .quote__span {
                margin: 24px 0;
            }
            .quote__bio {
                justify-content: left;
                font-size: 16px;
                line-height: 22px
            }
            .quote__text {
                text-align: left;
                font-size: 20px;
                line-height: 32px;
            }
            .quote__span {
                width: 24px;
            }
            .quote__position {
                color: black;
            }
            .quote-dots {
                z-index: 1;
                top: 25px;
                left: 20px;
            }
        }
    }
    .quote__span {
        width: 53px;
        height: 1px;
        background: black;
        display: block;
        margin: 50px 0;
    }
    .quote__text {
        margin-top: 150px;
        font-size: 24px;
        line-height: 48px;
        padding-right: 76px;
    }
    .quote__position {
        color: rgba(0, 0, 0, 0.5);
        margin-left: 7px;
    }
</style>