<template>
    <div class="shadow">
        <h3>
            <slot name="title"></slot>
        </h3>
        <p>Pyszne zupy, dania główne, desery i napoje</p>
    </div>
</template>

<style scoped>
div {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 20px;
    background-color: var(--color-green);
    border-radius: 12px;
    /* box-shadow: 0 2px 4px var(--color-orange);
    transition: box-shadow 0.3s ease; */
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

div:hover {
    opacity: 0.9;
    cursor: pointer;
}

h3 {
    width: 100%;
    color: #ffffff;
    text-align: left;
    padding: 20px 40px;
    font-weight: bold;
}

p{
    color: #ffffff;
    margin-left: 40px;
    font-size: 1.1rem;
}

@media screen and (max-width: 900px) {
    div {
        background-image: url("../assets/images/category-background.png");
        background-repeat: no-repeat, repeat;
        background-position: top;
    }
}
</style>
