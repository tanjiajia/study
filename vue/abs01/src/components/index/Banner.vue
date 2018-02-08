<template>
    <div class="banner">
        <Carousel
            v-model="value3"
            :autoplay="setting.autoplay"
            :loop="setting.loop"
            :autoplay-speed="setting.autoplaySpeed"
            :dots="setting.dots"
            :radius-dot="setting.radiusDot"
            :trigger="setting.trigger"
            :arrow="setting.arrow">
            <CarouselItem>
                <div class="demo-carousel">1111111111111111111</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">222222222222222222</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">333333333333333333</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">444444444444444444444</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">555555555555555555555</div>
            </CarouselItem>
        </Carousel>

        <div class="experience">
            立即体验
        </div>
    </div>
        
</template>

<script>
	export default {
    	name: 'Banner',
    	
	
        data () {
            return {
                value3: 0,
                setting: {
                    autoplay: true,
                    loop: true,
                    autoplaySpeed: 3000,
                    dots: 'inside',
                    radiusDot: false,
                    trigger: 'click',
                    arrow: 'hover'
                }
            }
        }
   
  	}
</script>


<style>
	.banner .demo-carousel{
		color: #fff;
        font-size: 30px;
	}
	.banner .demo-carousel{
		background: #666666;
		width: 100%;
		height: 410px;
	}
    .banner .ivu-carousel-dots-inside{
        bottom: 85px !important;
    }
    .banner .ivu-carousel-dots li{
        width: 10px;
        height: 10px;
        background: #9a9691;
        margin: 0 5px !important;
        padding: 0 !important;
        border-radius: 10px;
    }
    .banner .ivu-carousel-dots li.ivu-carousel-active{
        
        background: #fff;
    }
    .banner .ivu-carousel-dots li button{
        
        background: transparent !important;
    }
    .banner{
        position: relative;
        /* width:  */
    }
    .banner .experience{
        width: 420px;
        height: 60px;
        position: absolute;
        top: 210px;
        left: 50%;
        margin-left: -210px;
        border:#fff solid 1px;
        border-radius: 6px;
        text-align: center;
        line-height: 60px;
        font-size: 22px;
        color: #fff;
        font-family: 宋体;
    }
</style>