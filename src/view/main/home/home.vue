<template>
    <div class="home">
        <el-row>111</el-row>
        <el-row>
            <el-col :span="4">
                <el-menu
                :default-active="$route.path"
                :default-openeds="openensArr"
                router
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                @open="handleOpen"
                @close="handleClose">
                    <template v-for="routes in $router.options.routes" v-if="routes.hidden">
                        <template v-for="(route,index) in routes.children" v-if="route.hidden">
                            <el-submenu :index="route.path" :key="'submenu'+index" v-if="route.children">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>{{route.name}}</span>
                                </template>
                                <!-- <el-menu-item-group> -->
                                    <el-menu-item v-for="(subroute,subindex) in route.children" :key="'sub'+subindex" :index="subroute.path">{{subroute.name}}</el-menu-item>
                                <!-- </el-menu-item-group> -->
                            </el-submenu>
                            <el-menu-item :index="route.path" :key="'menu'+index" v-if="!route.children">
                                <i class="el-icon-menu"></i>
                                <span slot="title">{{route.name}}</span>
                            </el-menu-item>
                        </template>
                    </template>
                </el-menu>
            </el-col>
            <el-col class="20">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            openensArr:[]
        }
    },
    mounted(){
        
    },
    methods: {
      handleOpen(key, keyPath) {
            console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
            console.log(key, keyPath);
      }
    }
}
</script>

<style lang="scss" scoped type="text/css">
@import './home';
</style>
