<template>
  <div class="container" id="app2">
    <div class="row">
      <div class="col-sm-6 tasks_conainer">
        <div class="row tab_switcher_container">
          <div class="col-md-6 tab_item active_tab"><router-link to="/active">Active</router-link></div>
          <div class="col-md-6 tab_item"><router-link to="/archived">Archived</router-link></div>
        </div>
            <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }, 
  created: function () {
        // alert('nik');
  }
}
</script>

<style>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.tasks_conainer {
  margin:0 auto;
  border-style: solid;
  border-width: 1px;
  border-color: #969292;
}
.tab_item {
  background: #867f7f;
  color: white;
  cursor: pointer;
}
.tab_item a {
  color:white;
}
.tab_item.active_tab {
  background: #a59b9b;
}
</style>
