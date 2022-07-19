<template >
    <div class="wrap">
        <div class="row align-items-center">
            <picture class="wrap__img col-12 col-lg-6">
                        <source :srcset="require(`@/assets/imgs/${imgMob}`)" media="(max-width: 600px)" width="580px" height="406px"/>
                        <img :src="require(`@/assets/imgs/${img}`)" alt="img" width="100%" height="auto" />
                    </picture>
            <div class="wrap__info col-12 col-lg-6">
                <h2 class="h2 wrap__title">
                    {{title}}
                </h2>
                <p class="wrap__text">
                    {{text1}}
                    <span class="wrap__span">
                        {{span1}}
                    </span>
                </p>
                <p class="wrap__text">
                    {{text2}}
                    <span class="wrap__span">
                        {{span2}}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoWrapper",
     props: {
        img: {
			type: String,
			default: "storry-desk.jpg"
		},
        imgMob: {
			type: String,
			default: "storry-mb.jpg"
		},
		title: {
			type: String,
			default: "title"
		},
		text1: {
			type: String,
			default: "description"
		},
        text2: {
			type: String,
			default: ""
		},
        span1: {
            type: String,
			default: ""
        },
        span2: {
            type: String,
			default: ""
        }
		
    }
}
</script>

<style lang="scss" scoped>
    .wrap {
        max-width: 1440px;
        margin: 0 auto;
        overflow: hidden;
        padding: 70px 0;
        .wrap__info {
            padding-left: 80px;
            @include media-breakpoint-down(lg) {
                padding-left: 40px;
                padding-right: 30px;
                margin-top: 30px;
                max-width: 500px;
                margin: 30px auto 0;
                text-align: center;
            }
            @include media-breakpoint-down(md) {
                margin: 30px 0;
                text-align: left;
            }
        }
        img {
            width: 100%;
            height: auto;
        }
        .wrap__text {
            max-width: 459px;
            line-height: 40px;
            margin-top: 40px;
            @include media-breakpoint-down(lg) {
                line-height: 32px;
            }
            .wrap__span {
                @include media-breakpoint-up(lg) {
                    display: none;
                }
            }
        }
        &.style2 {
            img {
                margin-left: 60px;
                @include media-breakpoint-down(xl) {
                    margin-left: 0px;
                }
            }
            .wrap__info {
                padding-left: 0px;
                margin-left: -60px;
                @include media-breakpoint-down(lg) {
                    margin: 30px auto 0;
                    padding-left: 40px;
                }
                @include media-breakpoint-down(md) {
                margin: 30px 0;
                text-align: left;
            }
                
            }
        }
    }
    
    
</style>