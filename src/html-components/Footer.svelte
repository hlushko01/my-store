<script>
    import Container from "./Container.svelte";
    import Logo from "../assets/home/Funiro..svg"
    import Input from "./form-components/Input.svelte";

    let inputValue = '';
    let placeholder = 'Enter Your Email Address';
</script>

<footer>
    <div class="footer font-poppins">
        <Container>
            <div class="footer__body pt-12">
                <div class="flex flex-row">
                    <div class="footer-col mr-32">
                        <img class="mb-12" src={Logo} /> 
                        <div class="text-p16 font-normal text-c9F">
                            400 University Drive Suite 200 Coral Gables,
                            FL 33134 USA
                        </div>
                    </div>
                    <div class="footer-col__links mr-40">
                        <div class="footer-col__header text-p16 leading-normal font-medium text-c9F mb-14">
                            Links
                        </div>
                        <a href="#" class="text-p16 font-medium leading-normal text-black mb-11 block">
                            Home
                        </a>
                        <a href="#" class="text-p16 font-medium leading-normal text-black mb-11 block">
                            Shop
                        </a>
                        <a href="#" class="text-p16 font-medium leading-normal text-black mb-11 block">
                            About
                        </a>
                        <a href="#" class="text-p16 font-medium leading-normal text-black block">
                            Contact
                        </a>                        
                    </div>
                    <div class="footer-col__links mr-40">
                        <div class="footer-col__header text-p16 leading-normal font-medium text-c9F mb-14">
                            Help
                        </div>
                        <a href="#" class="text-p16 font-medium leading-normal text-black mb-11 block">
                            Payment Options
                        </a>
                        <a href="#" class="text-p16 font-medium leading-normal text-black mb-11 block">
                            Returns
                        </a>
                        <a href="#" class="text-p16 font-medium leading-normal text-black block">
                            Privacy Policies
                        </a>                     
                    </div>
                    <div class="footer-col__links">
                        <div class="footer-col__header text-p16 leading-normal font-medium text-c9F mb-14">
                            Newsletter
                        </div>
                       <!-- <form>
                            <Input value={inputValue} placeholder="Enter Your Email Address" type="Email" />
                            
                        </form> -->
                    </div>

                </div>
            </div>
        </Container>
    </div>
</footer>

<style>
.footer-col{
    max-width: 285px;
}
</style>