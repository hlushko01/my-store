<script>
    import Container from "../html-components/Container.svelte";
    import Furniro from "../assets/home/furniro.png"
</script>

<section>
    <div class="furniro">
        <Container>
            <div class="furniro__body pt-16 pb-12">
                <div class="text-center text-p20 font-semibold leading-normal text-c61 mb-2">
                    Share your setup with
                </div>
                <div class="text-center text-p40 leading-lh120 font-bold text-c3A">
                    #FuniroFurniture
                </div>
            </div>
        </Container>
        <div class="furniro-img max-w-full">
            <img class="w-full" src={Furniro}/>
        </div>
    </div>
</section>

<style>
    .furniro-img{
        margin-top: -3.5rem;
    }
</style>