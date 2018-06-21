<template>
<div>
  <banner></banner>
  <navigation></navigation>
  <router-view></router-view>
</div>
</template>

<script>
import Banner from './Banner.vue';
import Navigation from './Navigation.vue';

export default {
    components: {
        Banner,
        Navigation
    }
};
</script>

<style lang="less" scoped>

</style>
