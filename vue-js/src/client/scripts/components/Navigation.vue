<template>
<div class="navigation">
  <router-link to="/" exact="true" class="navigation-button" router-link-exact-active="active">
    (<span class="fas fa-home" />) Home
  </router-link>
  <router-link to="/about" class="navigation-button" router-link-active="active">
    (<span class="fas fa-info" />) About
  </router-link>
  <div id="pwa-install" class="navigation-button" style="display: none;">
    (<span class="fas fa-plus" />) Install as app
  </div>
</div>
</template>

<script>

</script>

<style lang="less" scoped>
.navigation {
    background-color: #000;
    height: 50px;

    .navigation-button {
        float: left;
        height: 50px;
        line-height: 50px;
        margin: 0 10px;
        color: #ccc;
        cursor: pointer;

        &:hover {
            color: #fff;
            text-decoration: underline;
        }

        &.exact-active {
            color: #f77;
            text-decoration: underline;
        }
    }
}
</style>
