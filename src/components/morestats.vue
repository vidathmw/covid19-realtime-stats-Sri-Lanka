<template>
  <div>
    <section class="page-section bg-primary" id="morestats">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col text-white"><h4>Total active cases: {{info.data.local_active_cases}}</h4></div>
          <div class="col text-white"><h4>Total recovered {{info.data.local_recovered}}</h4></div>
          <div
            class="col text-white"
          ><h4>Total in hospitals {{info.data.local_total_number_of_individuals_in_hospitals}}</h4></div>
        </div>
      
      </div>

    </section>
  </div>
</template>

<script>
export default {
props:{
    info: {},
}
};
</script>

<style scoped>
</style>