<button class="main-btn">
    <slot></slot>   
</button>

<style>
    .main-btn{
        background:#B88E2F;
        display: inline-flex;
        padding: 25px 72px;
        align-items: flex-start;
        gap: 10px;
        color: #FFF;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        transition: .35s;
    }

    .main-btn:hover{
        opacity: .7;
    }
</style>