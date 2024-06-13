<template>  
  <div class=" container-fluid">
    <div class="row">
      <div>
        <div class="card z-index-2">
          <div class="card-header p-3 pt-2">       
            <h6 class="mb-0">Doughnut chart</h6>
            <p class="mb-0 text-sm">Affiliates program</p>
          </div>
          <div class="p-3 card-body">
            <div class="card-body d-flex p-3 pt-0">
              <doughnut-chart
                class="w-50"
                :chart="{
                  labels: [
                    'Dev.to',
                    'Creative Tim',
                    'Bootsnipp',
                    'Github',
                    'Codeinwp'
                  ],
                  datasets: {
                    label: 'Projects',
                    data: [15, 20, 12, 60, 20]
                  }
                }"
              />
              <div class="table-responsive w-50">
                <table class="table align-items-center mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img
                              src=""
                              class="avatar avatar-sm me-2"
                              alt="logo_xd"
                            />
                          </div>
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
                          <div>
                            <img
                              src=""
                              class="avatar avatar-sm me-2"
                              alt="logo_atlassian"
                            />
                          </div>
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
                          <div>
                            <img
                              src=""
                              class="avatar avatar-sm me-2"
                              alt="logo_slack"
                            />
                          </div>
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
                          <div>
                            <img
                              src=""
                              class="avatar avatar-sm me-2"
                              alt="logo_spotify"
                            />
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">기타</h6>
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
                          <div>
                            <img
                              src=""
                              class="avatar avatar-sm me-2"
                              alt="logo_jira"
                            />
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">남은 돈</h6>
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

<script>
import DoughnutChart from "@/examples/Charts/DoughnutChart.vue";
export default {
  name: "ChannelsChartCard",
  components: {
    DoughnutChart
  },
};
</script>
