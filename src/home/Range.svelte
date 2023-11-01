<script>
    import Container from "../html-components/Container.svelte";
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
              <img class="mb-8" src="src/assets/home/Dining.png">
              <div class="text-p24 font-poppins text-c3 leading-normal font-semibold text-center">
                Dining
              </div>
            </div>
            <div class="range__item">
              <img class="mb-8" src="src/assets/home/Living.png">
              <div class="text-p24 font-poppins text-c3 leading-normal font-semibold text-center">
                Living
              </div>
            </div>
            <div class="range__item">
              <img class="mb-8" src="src/assets/home/Bedroom.png">
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