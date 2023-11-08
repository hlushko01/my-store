<script>
  import { onMount } from 'svelte';
  import Container from "../html-components/Container.svelte";
  import SmallerBtn from "../html-components/buttons/SmallerBtn.svelte";
  import Swiper from 'swiper'; 
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  
  let swiper;
  
  onMount(() => {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        slidesPerGroup: 1, 
        pagination: true,
    });
  });
</script>


<section>
    <div class="rooms">
        <div class="rooms__body p-11">
            <Container>
                <div class="flex flex-row items-center">
                    <div class="rooms__left-content max-w-md mr-11">
                        <div class="mb-2">
                            <div class="p40 font-bold font-poppins text-p40 text-c3A">50+ Beautiful rooms inspiration</div>
                        </div>
                        <div class="mb-6">
                            <div class="text-p16 text-c61 leading-normal">Our designer already made a lot of beautiful prototipe of rooms that inspire you</div>
                        </div>
                        <div>
                            <SmallerBtn>
                                Explore More
                            </SmallerBtn>
                        </div>
                    </div>
                    <div>
                        <!-- Slider main container -->
                        <div class="swiper-container max-w-md pr-9 overflow-hidden">
                        <!-- Additional required wrapper -->
                            <div class="swiper-wrapper">
                                <!-- Slides -->
                                <div class="swiper-slide  bg-gray-700">Slide 1</div>
                                <div class="swiper-slide bg-pink-500">Slide 2</div>
                                <div class="swiper-slide bg-blue-600">Slide 3</div>
                                <div class="swiper-slide"></div>
                            </div>
                    </div>
                </div>
            </Container>
        </div>
    </div>    
</section>


<style>
    .rooms{
        background: #FCF8F3;
        overflow-x: hidden;
    }
    .rooms__left-content{
        min-width: 400px;
    }
    
    .swiper-container {
        width: 100%;
        height: 100%;
        max-width: 100%;
    }
    .swiper-wrapper{
        width: 100%;
        max-width: 876px;
    }

    .swiper-slide{
        /*max-width: 404px;*/
        aspect-ratio: 372/486;
        margin-bottom: 96px;
    }
    
    .swiper-slide-active{
        aspect-ratio: 484/582;
        margin-bottom: 0px;
    }

    
</style>