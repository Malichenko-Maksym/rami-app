<template>
    <div id="item">
        <div>
            <img src="../assets/icons/checked.png" alt="Notification icon" />
        </div>
        <diV>
            <h4>
                <slot name="title"></slot>
            </h4>
            <p>
                <slot name="description"></slot>
            </p>
        </diV>
    </div>
</template>

<style scoped>
#item {
    display: flex;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 12px;
    background-color: var(--color-white);
    border: 1px solid var(--color-light-grey);
}

#item>div:nth-of-type(1) {
    width: 15%;
    text-align: center;
}

#item>div:nth-of-type(2) {
    width: 85%;
}

h4 {
    font-size: 1.3rem;
    font-weight: bold;
}

img {
    width: 32px;
    margin-top: 16px;
}

@media screen and (max-width: 900px) {

    #item {
        width: 90%;
    }

    #item>div:nth-of-type(1) {
        width: 25%;
    }

    #item>div:nth-of-type(2) {
        width: 75%;
    }

}
</style>
