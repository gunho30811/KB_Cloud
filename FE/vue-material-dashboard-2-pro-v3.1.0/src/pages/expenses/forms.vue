<template>
  <div class="container">
    <div class="sidenav-wrapper">
      <Sidenav />
    </div>
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
                <input type="date" class="form-control" v-model="calendarValue"/>
              </div>
              <div class="col-3">
                <MaterialInput id="asset" variant="dynamic" label="자산" v-model:value="assetValue" />
              </div>
              <div class="col-3">
                <MaterialInput id="amount" variant="dynamic" label="금액" v-model:value.number="amountValue" />
              </div>
              <div class="col-3">
                <MaterialInput id="category" variant="dynamic" label="분류" v-model:value="categoryValue" />
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-12">
                <MaterialInput id="memo" variant="dynamic" label="메모" v-model:value="memoValue" />
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button type="button" class="mt-2 mb-0 btn bg-gradient-success" @click="saveData">
                추가
              </button>
            </div>
          </div>
        </div>
      </div>
      <Cfooter />
    </div>
  </div>
</template>

<script setup>
import Sidenav from "@/components/Sidenav.vue";
import MaterialInput from "@/components/MaterialInput.vue";
import Cfooter from "@/components/Cfooter.vue";
import axios from 'axios';
import { ref, onMounted } from 'vue';

const members = ref([]);

onMounted(async () => {
    await fetchMembers();
});

const fetchMembers = async () => {
try {
    const response = await axios.get('/api/expenses');
    members.value = response.data;
} catch (error) {
    console.error('Failed to fetch members:', error);
}
};

const calendarValue = ref(""); // 날짜
const assetValue = ref(""); // 자산
const amountValue = ref(""); // 금액
const categoryValue = ref(""); // 분류
const memoValue = ref(""); // 메모

const saveData = async ()=>{
  const dataToSave = {
    category: categoryValue.value,
    date: calendarValue.value,
    asset: assetValue.value,
    money: amountValue.value,
    memo: memoValue.value,
  }
  try{
    console.log(JSON.stringify(dataToSave));
    console.log(dataToSave);
    await axios.post('http://localhost:3000/expenses', dataToSave);
    alert('전송되었습니다.')
  } catch(error){
    alert('전송에 실패 하였습니다.');
  }
}

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.sidenav-wrapper {
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
    margin-left: 0; /* No margin-left in smaller screens */
  }
  .sidenav-wrapper {
    width: 100%;
  }
}
</style>
