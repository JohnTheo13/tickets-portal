<template>
  <router-view />
</template>


<script>
import { useToast } from 'vue-toastification'
export default {
  name: 'App',
  setup () {
    // Get toast interface
    const toast = useToast()

    // Use it!
    // toast("I'm a toast!")

    // or with options
    // toast.success('My toast content', {
    //   timeout: 2000
    // })
    // These options will override the options defined in the "app.use" plugin registration for this specific toast

    // Make it available inside methods
    return { toast }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-image: url('./assets/background.png');
  background-position: center;
  background-size: cover;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
