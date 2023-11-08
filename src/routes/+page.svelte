<script>
    import "../app.css";
    import Navbar from "../html-components/Navbar.svelte";
    import Hero from "../home/Hero.svelte";
    import Range from "../home/Range.svelte";
    import ProductSection from "../home/ProductSection.svelte";
    import Rooms from "../home/Rooms.svelte";
    import Furniro from "../home/Furniro.svelte";
  </script>


<Navbar />
<Hero />
<Range />
<ProductSection />
<Rooms />
<Furniro></Furniro>




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
