<template>
    <header id="header" class="header">
        <div class="header-container container">
            <img class="logo logo-normal" src="../assets/logo.svg" alt="Logo WeatherNow" />
        </div>
    </header>
</template>

<script>
export default {
    name: 'MainHeader',
}
</script>

<style>
.header {
    background: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    width: 100%;
    top: 0;
}
</style>