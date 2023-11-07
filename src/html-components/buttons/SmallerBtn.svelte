<button class="smaller-btn">
    <slot></slot>   
</button>

<style>
    .smaller-btn{
        background:#B88E2F;
        display: inline-flex;
        padding: 12px 36px;
        align-items: flex-start;
        gap: 10px;
        color: #FFF;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%;  
    }

    .smaller-btn:hover{
        opacity: .7;
    }
</style>