<script>
    import Container from "../html-components/Container.svelte";
    import Dining from "../assets/home/Dining.png";
    import Living from "../assets/home/living.png";
    import Bedroom from "../assets/home/Bedroom.png"
</script>

<section class="section">
    <div class="range">
      <Container>
        <div class="range__body py-14 content-center">
          <div class="flex flex-col items-center mb-16">
            <div class="text-p32 leading-normal text-c3 font-bold font-poppins">
              Browse The Range
            </div>
            <div class="text-p20 font-poppins leading-normal font-normal text-c666">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div class='flex space-x-5 justify-center'>
            <div class="range__item">
              <img class="mb-8" src={Dining}>
              <div class="text-p24 font-poppins text-c3 leading-normal font-semibold text-center">
                Dining
              </div>
            </div>
            <div class="range__item">
              <img class="mb-8" src={Living}>
              <div class="text-p24 font-poppins text-c3 leading-normal font-semibold text-center">
                Living
              </div>
            </div>
            <div class="range__item">
              <img class="mb-8" src={Bedroom}>
              <div class="text-p24 font-poppins text-c3 leading-normal font-semibold text-center">
                Bedroom
              </div>
            </div>          
          </div>
        </div>
      </Container>
    </div>
  </section>

  <style>

  </style>