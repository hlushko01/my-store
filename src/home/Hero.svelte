
<script>
    import Container from "../html-components/Container.svelte";
    import MainBtn from "../html-components/buttons/MainBtn.svelte";
    import H1 from "../html-components/fonts/H1.svelte";
    import P18 from "../html-components/fonts/P18.svelte";
</script>
<section class="section">
    <div class="hero">
        <Container>
            <div class="hero__body py-40 flex justify-end">
              <div class="hero-card pt-16 pb-9 px-10 max-w-2xl ">
                <div class="hero-card__subheader">
                  <div class="mb-1">
                    <div class="font-semibold font-poppins text-p16 tracking-3px text-c3">
                      New Arrival
                   </div>
                  </div>
                  <div class="mb-4">
                    <h1 class="font-poppins font-bold text-hero">
                      Discover Our New Collection
                    </h1>
                  </div>
                  <div class="mb-12">
                    <div class="text-p18 leading-lh120 font-medium text-c3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </div>
                  </div>
                  <div>
                    <MainBtn>
                      BUY Now
                    </MainBtn>
                  </div>
                </div>
              </div>
            </div>
        </Container>    
    </div>
</section>
<style lang="postcss">
    .hero{
       /* min-height: 100vh; */
        background: url(../assets/home/scandinavian.png);
    }

    .hero-card{
      border-radius: 10px;
      background: #FFF3E3;
    }
  </style>
