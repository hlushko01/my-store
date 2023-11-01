<script>
    import "../app.css";
    import Navbar from "../html-components/Navbar.svelte";
    import Container from "../html-components/Container.svelte";
    import P18 from "../html-components/fonts/P18.svelte";
    import MainBtn from "../html-components/buttons/MainBtn.svelte";
    import P32 from "../html-components/fonts/P32.svelte";
    import P20 from "../html-components/fonts/P20.svelte";
    import P24 from "../html-components/fonts/P24.svelte";
    import ProductList from "../html-components/ProductList.svelte";
    import P40 from "../html-components/fonts/P40.svelte";
    import Hero from "../home/Hero.svelte";
    import Range from "../home/Range.svelte";
  </script>

<Navbar />

<Hero />
<Range />

<section class="section">
  <div class="products">
    <Container>
      <div class="mb-8">
        <div class="p40 font-bold font-poppins text-p40 text-c3A text-center">Our Products</div>
      </div>
      <ProductList />
    </Container>
  </div>
</section>


<h1 class="text-8xl font-bold underline">
    Hello world!
</h1>
  
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
