<template>
  <div class="index">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" @click="moveTo('index')"><img src="@/assets/images/logo.jpg"></el-menu-item>
          <el-menu-item index="1" @click="moveTo('index')">首页</el-menu-item>
          <el-menu-item index="1" @click="moveTo('new')">最新视频</el-menu-item>
          <el-menu-item index="1" @click="moveTo('hot')">热门视频</el-menu-item>
          <el-submenu index="2">
            <template slot="title">视频分类</template>
            <el-menu-item index="2-1" @click="moveTo('sortHot')">最热</el-menu-item>
            <el-menu-item index="2-2" @click="moveTo('sortWord')">字母排序</el-menu-item>
            <el-menu-item index="2-3" @click="moveTo('sortNew')">最新</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" @click="moveTo('adrees')">地址发布</el-menu-item>
          <el-menu-item index="4" @click="moveTo('update')">上传</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <transition>
          <!-- <router-view /> -->
          <mainIndex>

          </mainIndex>
        </transition>
      </el-main>
      <el-footer>

      </el-footer>
    </el-container>
  </div>
</template>

<script>
import mainIndex from './main_index.vue'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    moveTo(string) {
      this.$message(string);
      this.$store.commit('change',{key:'changePage',value:string})
    }
  },components: {
    // <my-component> 将只在父模板可用
    'mainIndex': mainIndex
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-menu.el-menu--horizontal {
    background: #ccc;
    }
</style>
