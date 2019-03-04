<template>
    <div id="app">
        <header-nav></header-nav>
        <router-view />
        <foot></foot>
    </div>
</template>

<script>
import headerNav from './components/head-nav'
import foot from './components/foot'
export default {
  name: 'App',
  components: {
    headerNav,
    foot
  }
}
</script>

<style>

</style>
