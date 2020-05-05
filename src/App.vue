<template>
  <div id="app">
      <!-- Navigation-->
    <navigation-component></navigation-component>
    <!-- Masthead-->
    <header-component :info="info" ></header-component>
    <!-- More Stats-->
    <morestats-component :info="info" ></morestats-component>

    <!-- Hospitals-->
    <hospitals-component :info="info"></hospitals-component>

    <!-- Contact-->
    <contact-component></contact-component>
    <!-- Footer-->
    <footer class="bg-light py-5">
      <div class="container">
        <div class="small text-center text-muted">Copyright © 2020 - YarraZone Pvt. Ltd</div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavigationComponent from './components/navigation'
import HeaderComponent from './components/header'
import HospitalsComponent from './components/hospitals'
import ContactComponent from './components/contact'

import MorestatsComponent from './components/morestats'
import { RepositoryFactory } from './repositories/RepositoryFactory'
const PostsRepository = RepositoryFactory.get('info')
export default {
  name: "App",
  components: {
    NavigationComponent,
    HeaderComponent,
    MorestatsComponent,
    HospitalsComponent,
    ContactComponent,
  },
    data() {
    return {
      info: {
        data: {
          update_date_time: 0,
          local_deaths:0,
          local_recovered:0,
          local_new_cases:0,
          local_total_cases:0,
        }
      },
    };
  },
created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      this.isLoading = true
      const { data } = await PostsRepository.get()
      this.isLoading = false
      this.info = data;
    }
  },
};

</script>

<style>
</style>
