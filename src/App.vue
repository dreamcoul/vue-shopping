<template>
    <div id="app">
        <header-nav></header-nav>
        <router-view />
    </div>
</template>

<script>
import headerNav from './components/head-nav'
export default {
  name: 'App',
  components: {
    headerNav
  }
}
</script>

<style>

</style>
