<template>  
  <div class=" container-fluid">
    <div class="row">
      <div>
        <div class="card z-index-2">
          <div class="card-header p-3 pt-2">       
            <h6 class="mb-0">분류별 지출</h6>
            <p class="mb-0 text-sm">분류별 지출 내역을 도넛 차트로 살펴보세요.</p>
          </div>
          <div class="p-3 card-body">
            <div class="card-body d-flex p-3 pt-0">
              <doughnut-chart
                class="w-50"
                :chart="{
                  labels: [
                    '식비',
                    '의료',
                    '교통비',
                    '생활용품',
                    '기타'
                  ],
                  datasets: {
                    label: 'Projects',
                    data: [25, 13, 12, 37, 13]
                  }
                }"
              />
              <div class="table-responsive w-50">
                <table class="table align-items-center mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">식비</h6>
                          </div>
                        </div>
                      </td>
                      <td class="">
                        <span class="text-xs font-weight-bold">25%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">의료</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="text-xs font-weight-bold">13%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">교통비</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="text-xs font-weight-bold">12%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">생활용품</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="text-xs font-weight-bold">37%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">기타</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="text-xs font-weight-bold">13%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DoughnutChart from "@/examples/Charts/DoughnutChart.vue";

</script>
