<template>
  <div>
    <header class="masthead" id="summary">
      <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-20 align-self-end">
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <div class="main-stats-number">{{info.data.local_total_cases}}</div>
                  <div class="main-stats-text">TOTAL</div>
                </div>
                <div class="col-sm">
                  <div class="main-stats-number">{{info.data.local_new_cases}}</div>
                  <div class="main-stats-text">NEW</div>
                </div>
                <div class="col-sm">
                  <div class="main-stats-number">{{info.data.local_recovered}}</div>
                  <div class="main-stats-text">RECOVERED</div>
                </div>
                <div class="col-sm">
                  <div class="main-stats-number">{{info.data.local_deaths}}</div>
                  <div class="main-stats-text">DEATHS</div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm">
                  <div>
                    <br />
                  </div>
                  <div class="main-stats-text">in Sri Lanka</div>
                </div>
              </div>
            </div>
            <hr class="divider my-4" />
          </div>
          <div class="col-lg-8 align-self-baseline">
            <p
              class="text-white-75 font-weight-light mb-5"
            >Data retieved from Health Promotion Bureau of Sri Lanka</p>
            <div class="text-white mb-5">Last update : {{info.data.update_date_time}}</div>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#morestats">More Stats</a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  props:{
    info:{},
  }
}
</script>

<style scoped>
.main-stats-text {
  font-size: 25px;
  font-weight: bold;
  color: aliceblue;
}
.main-stats-number {
  font-weight: bolder;
  font-size: 50px;
  color: ghostwhite;
}
</style>