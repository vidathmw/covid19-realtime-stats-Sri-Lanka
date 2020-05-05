<template>
  <div>
    <section class="page-section" id="hospitals">
      <div class="container">
        <h2 class="text-center mt-0">Statistics of Hospitals in Sri Lanka</h2>
        <hr class="divider my-4" />
        <br />
        <div class="row h-100">
            <div class="col-md-4">
                        
                <div class="col justify-content-center">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Select a hospital</button>
              <div class="dropdown-menu dropdown-menu scrollable-menu">
                <button class="dropdown-item" type="button" v-for="(obj, index) in info.data.hospital_data" :key="index" @click="update(obj.treatment_local, obj.treatment_foreign, obj.cumulative_local, obj.cumulative_foreign, obj.hospital.name_si, obj.hospital.name, obj.hospital.name_ta)">{{obj.hospital.name}}</button>
                
              </div>
            </div>
          </div>
            </div>
          
          <div class="col-md-8">

              <div class="col">
                <h5>
                  {{hospital_info.name_en}}
                  <br />{{hospital_info.name_si}}
                  <br />{{hospital_info.name_ta}}
                </h5>
              </div>
            
            <div class="row">
              <br />
              <br />
            </div>
            <div class="row bg-secondary text-white align-items-center">
              <div class="col">
                <h6>Locals currently on treatment:</h6>
              </div>
              <div class="col text-left">
                <h5>{{hospital_info.locals_on_treatment}}</h5>
              </div>
              <br />
              <br />
            </div>
           <div class="row align-items-center">
              <div class="col">
                <h6>Foreigners currently on treatment:</h6>
              </div>
              <div class="col text-left">
                <h5>{{hospital_info.foreigners_on_treatment}}</h5>
              </div>
              <br />
              <br />
            </div>
             <div class="row bg-secondary text-white align-items-center">
              <div class="col">
                <h6>Total locals observed or treated:</h6>
              </div>
              <div class="col text-left">
                <h5>{{hospital_info.total_locals}}</h5>
              </div>
              <br />
              <br />
            </div>
            <div class="row align-items-center">
              <div class="col">
                <h6>Total foreigners observed or treated:</h6>
              </div>
              <div class="col text-left">
                <h5>{{hospital_info.total_foreigners}}</h5>
              </div>
              <br />
        
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    info: {}
  },
  data(){
      return{
          hospital_info:{
              locals_on_treatment: 0,
              foreigners_on_treatment: 0,
              total_locals: 0,
              total_foreigners: 0,
              name_si: "",
              name_en: "",
              name_ta:"",
          }
      }
  },
  methods:{
     update(locals_on_treatment, foreigners_on_treatment, total_locals, total_foreigners, name_si, name_en, name_ta){
         this.hospital_info.locals_on_treatment=locals_on_treatment;
         this.hospital_info.foreigners_on_treatment=foreigners_on_treatment;
         this.hospital_info.total_locals=total_locals;
         this.hospital_info.total_foreigners=total_foreigners;
         this.hospital_info.name_si = name_si;
         this.hospital_info.name_en = name_en;
         this.hospital_info.name_ta = name_ta;
     }
     
  }
};
</script>

<style scoped>
.scrollable-menu {
    height: auto;
    max-height: 250px;
    overflow-x: hidden;
}
</style>