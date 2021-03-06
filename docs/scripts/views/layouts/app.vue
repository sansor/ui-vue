<template>
  <div class="balmui-container">
    <template v-if="noLayout">
      <router-view></router-view>
    </template>
    <template v-else>
      <!-- header -->
      <ui-top-app-bar class="balmui-head" fixed contentSelector=".balmui-body" navId="balmui-menu">
        <router-link to="/" :class="['catalog-title', $themeColor('on-primary')]">BalmUI</router-link>
        <template slot="toolbar" slot-scope="{ itemClass }">
          <a :class="itemClass" href="https://github.com/balmjs/ui-vue">
            <svg-github></svg-github>
          </a>
        </template>
      </ui-top-app-bar>
      <!-- content -->
      <div class="balmui-body">
        <ui-dismissible-drawer
          v-model="open"
          class="balmui-menu"
          menuSelector="#balmui-menu">
          <ui-drawer-content>
            <ui-list-nav ref="mainmenu" class="catalog-list">
              <template slot-scope="{ itemClass, activeClass }">
                <template v-for="(item, index) in menu">
                  <router-link
                    v-if="item.icon || item.isSubmenu"
                    :key="`item${index}`"
                    :class="[itemClass, {
                      'submenu': item.isSubmenu,
                      'no-icon': !item.icon
                    }, $textColor('primary', 'light')]"
                    :to="item.url"
                    :active-class="activeClass"
                    @click.native="handleMenu">
                    <span v-if="item.icon" class="demo-catalog-list-icon">
                      <img :src="require(`../../../images/icon/${item.icon}`)" :alt="item.name">
                    </span>
                    {{ item.name }}
                  </router-link>
                  <ui-list-divider v-else-if="item === '-'" :key="`divider${index}`"></ui-list-divider>
                  <h3 v-else :key="`head${index}`" :class="$textColor('primary', 'light')">{{ item.name }}</h3>
                </template>
              </template>
            </ui-list-nav>
          </ui-drawer-content>
        </ui-dismissible-drawer>
        <main ref="body" class="balmui-content" v-anchor.offset="60">
          <transition name="loading">
            <div v-if="loading" class="loading-container">
              <ui-spinner active></ui-spinner>
            </div>
            <router-view v-else></router-view>
          </transition>
        </main>
      </div>
    </template>
  </div>
</template>

<script>
import SvgGithub from '../../components/github';
import { lang } from '../../config/lang';
import menu from '../../config/menu';

export default {
  metaInfo: {
    title: 'BalmUI'
  },
  components: {
    SvgGithub
  },
  data() {
    return {
      lang,
      menu,
      open: false,
      loading: false
    };
  },
  computed: {
    noLayout() {
      return this.$route.name
        ? this.$route.meta && this.$route.meta.noLayout
        : true;
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.loading = true;
      next();
    });

    this.$router.afterEach((to, from) => {
      this.loading = false;
      this.$nextTick(() => {
        if (this.$refs.body) {
          this.$refs.body.scrollTop = 0;
        }
      });
    });
  },
  mounted() {
    this.open = window.innerWidth >= 1024;

    window.addEventListener('balmResize', () => {
      this.open = window.innerWidth >= 1024;
    });
  },
  methods: {
    // isActiveLang(lang) {
    //   return lang === this.$i18n.locale;
    // },
    // switchLang(lang) {
    //   this.$i18n.locale = lang;
    // },
    handleMenu() {
      if (window.innerWidth < 1024) {
        this.open = false;
      }
    }
  }
};
</script>
