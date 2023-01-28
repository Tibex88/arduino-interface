<template>
  <div class="container">
    <NavBar />

    <main>
      <div class="main__container">
        <!-- MAIN TITLE STARTS HERE -->

        <div class="main__title">
          <!-- <img src="assets/hello.svg" alt="" /> -->
          <div class="main__greeting">
            <h1>Control Interface</h1>
            <p></p>
          </div>
        </div>

        <!-- MAIN TITLE ENDS HERE -->

        <!-- MAIN CARDS STARTS HERE -->
        <div class="main__cards">
          <InfoCardVue
            v-for="(i, index) in data"
            :key="index"
            :index="index + 1"
            :condition="i.condition"
            @click.native="toggleTank(index)"
          />
        </div>
        <!-- MAIN CARDS ENDS HERE -->

        <!-- CHARTS STARTS HERE -->
        <div
          class="charts"
          v-for="(i, index) in data"
          :key="index"
          :class="{ hidden: i.hidden }"
        >
          <div class="charts__left">
            <div class="charts__left__title">
              <div>
                <h1>Detail Status</h1>
                <p>{{ i.name }}</p>
              </div>
              <!-- <i class="fa fa-usd" aria-hidden="true"></i> -->
            </div>
            <!-- A chart -->
            <div id="apex1"></div>
          </div>

          <div class="charts__right">
            <div class="charts__right__title">
              <div>
                <h1>Controls</h1>
              </div>
              <!-- <i class="fa fa-usd" aria-hidden="true"></i> -->
            </div>

            <div class="charts__right__cards">
              <ControlsVue
                v-for="i in 4"
                :key="i"
                @click.native="lightOn"
                :controlName="'F1'"
                :type="'card1'"
              />
            </div>
          </div>
        </div>
        <!-- CHARTS ENDS HERE -->
      </div>
    </main>
  </div>
</template>

<script>
import { data } from "./store";
import port from "./serialport";
import NavBar from "./components/NavBarVue.vue";
import InfoCardVue from "./components/InfoCardVue.vue";
import ControlsVue from "./components/ControlsVue.vue";

export default {
  name: "App",
  components: {
    NavBar,
    InfoCardVue,
    ControlsVue,
  },
  data() {
    return { port, data };
  },
  methods: {
    toggleTank(idx) {
      console.log(idx);
      this.data.map((el, index) => {
        idx === index ? (el.hidden = false) : (el.hidden = true);
      });
    },
    lightOn() {
      this.port.binding.emitData("Hello, world!\n");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
