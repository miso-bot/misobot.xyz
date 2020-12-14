<template>
  <div class="hero-head is-large">
    <header
      class="navbar is-transparent is-fixed-top"
      :class="{ 'has-background-primary': coloredNavbar }"
      :style="{ height: height }"
    >
      <div class="container is-max-widescreen">
        <div class="navbar-brand">
          <div class="navbar-item"></div>
          <span
            class="navbar-burger burger"
            :class="{
              'is-active': isHamburgerOpen,
            }"
            @click="openHamburgerMenu"
            data-target="navMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          id="navMenu"
          class="navbar-menu"
          :class="{
            'is-active': isHamburgerOpen,
            'has-background-primary': coloredNavbar && isHamburgerOpen,
          }"
        >
          <div class="navbar-end">
            <div class="navbar-item navbar-clickable">
              <a href="#section-home" v-smooth-scroll>Home</a>
            </div>
            <div class="navbar-item navbar-clickable">
              <a href="https://discord.gg/YtjmhQC">Discord</a>
            </div>
            <div class="navbar-item navbar-clickable">
              <a href="#section-donate" v-smooth-scroll>Donate</a>
            </div>
            <div class="navbar-item navbar-clickable">
              <a href="#section-documentation" v-smooth-scroll>Documentation</a>
            </div>
            <span class="navbar-item navbar-clickable">
              <a href="https://github.com/joinemm/miso-bot" class="github-icon">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
.navbar,
.navbar-menu {
  -webkit-transition: 0.4s ease;
  -moz-transition: 0.4s ease;
  -o-transition: 0.4s ease;
  transition: 0.4s ease;
}
.navbar-menu {
  box-shadow: none;
}
.navbar-clickable {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.03em;
  line-height: 25.88px;
}
.navbar-item img {
  max-height: 3rem;
}
.burger {
  color: #ffffff !important;
  opacity: 0.7;
  -webkit-transition: opacity 0.5s;
  -moz-transition: opacity 0.5s;
  -o-transition: opacity 0.5s;
  transition: opacity 0.5s;
}
.burger:hover {
  opacity: 1;
}
.github-icon {
  font-size: 2.5rem;
  width: 3rem;
}
</style>

<script>
export default {
  name: "Header",
  data() {
    return {
      coloredNavbar: false,
      height: `7rem`,
      isHamburgerOpen: false,
    };
  },
  methods: {
    openHamburgerMenu() {
      this.isHamburgerOpen = !this.isHamburgerOpen;
    },
    updateScroll() {
      if (window.scrollY == 0) {
        this.coloredNavbar = false;
        this.height = `7rem`;
      } else {
        this.coloredNavbar = true;
        this.height = `3.5rem`;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>
