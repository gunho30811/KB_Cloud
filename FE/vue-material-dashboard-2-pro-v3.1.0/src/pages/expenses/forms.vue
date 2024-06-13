<template>
  <div class="container">
    <Sidenav />
    <div class="main-content py-4 container-fluid">
      <h1>Forms</h1>
      <!-- Account page content -->
      <div class="row">
        <div class="col-lg-6">
          <h4>지출 입력 페이지</h4>
        </div>
      </div>
      <div class="mt-4 row">
        <div class="card">
          <div class="card-body">
            <div class="row mt-4">
              <div class="col-3">
                <material-input id="collection" variant="dynamic" label="날짜" v-model="dateValue" />
              </div>
              <div class="col-3">
                <material-input id="price" variant="dynamic" label="자산" v-model="assetValue" />
              </div>
              <div class="col-3">
                <material-input id="quantity" variant="dynamic" label="금액" v-model="amountValue" />
              </div>
              <div class="col-3">
                <material-input id="quantity" variant="dynamic" label="분류" v-model="categoryValue" />
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-12">
                <material-input id="name" variant="dynamic" label="메모" v-model="memoValue" />
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button type="button" class="mt-2 mb-0 btn bg-gradient-success" @click="saveData">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "@/components/Sidenav.vue";
import MaterialInput from "@/components/MaterialInput.vue";

export default {
  name: "Account",
  components: {
    Sidenav,
    MaterialInput
  },
  data() {
    return {
      dateValue: "", 
      assetValue: "", 
      amountValue: "",
      categoryValue: "",
      memoValue: "", 
    };
  },
  methods: {
    saveData() {
      console.log("Date:", this.dateValue);
      console.log("Asset:", this.assetValue);
      console.log("Amount:", this.amountValue);
      console.log("Category:", this.categoryValue);
      console.log("Memo:", this.memoValue);
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.sidenav {
  width: 200px; /* Adjusted to a smaller width */
}

.main-content {
  flex: 1;
  padding: 20px;
  margin-left: 200px; /* Adjusted to match the sidebar width */
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .main-content {
    margin-left: 0;
  }
  .sidenav {
    width: 100%;
  }
}
</style>
