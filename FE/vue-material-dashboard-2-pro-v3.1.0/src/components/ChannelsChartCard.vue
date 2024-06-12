<template>
  
  <div class="card h-100">
    <div class="col-md-6 col-12">
        <div class="card z-index-2 mt-4">
          <div class="card-header p-3 pt-2">
            <div
              class="icon icon-lg icon-shape bg-gradient-warning shadow-warning text-center border-radius-xl mt-n4 me-3 float-start"
            >
              <i class="material-icons opacity-10">donut_small</i>
            </div>
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
              <!-- <div class="table-responsive w-50">
                <table class="table align-items-center mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img
                              src="../../assets/img/small-logos/devto.svg"
                              class="avatar avatar-sm me-2"
                              alt="logo_xd"
                            />
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">DevTo</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="text-xs font-weight-bold">25%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img
                              src="../../assets/img/small-logos/creative-tim.svg"
                              class="avatar avatar-sm me-2"
                              alt="logo_atlassian"
                            />
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">CreativeTim</h6>
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
                              src="../../assets/img/small-logos/bootstrap.svg"
                              class="avatar avatar-sm me-2"
                              alt="logo_slack"
                            />
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">Bootsnip</h6>
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
                              src="../../assets/img/small-logos/github.svg"
                              class="avatar avatar-sm me-2"
                              alt="logo_spotify"
                            />
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">Github</h6>
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
                              src="../../assets/img/small-logos/google-webdev.svg"
                              class="avatar avatar-sm me-2"
                              alt="logo_jira"
                            />
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">Codeinwp</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="text-xs font-weight-bold">13%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    <div class="p-3 pb-0 card-header">
      <div class="d-flex justify-content-between">
        <h6 class="mb-0">분류별 지출</h6>
      </div>
    </div>
    <div class="p-3 pb-0 mt-4 card-body">
      <div class="row">
        <div class="col-7 text-start">
          <pie-chart
            :chart="{
              labels: ['Facebook', 'Direct', 'Organic', 'Referral'],
              datasets: {
                label: 'Projects',
                data: [15, 20, 12, 60],
              },
            }"
          />
        </div>
        <div class="my-auto col-5">
          <span class="badge badge-md badge-dot me-4 d-block text-start">
            <i class="bg-info"></i>
            <span class="text-xs text-dark">Facebook</span>
          </span>
          <span class="badge badge-md badge-dot me-4 d-block text-start">
            <i class="bg-primary"></i>
            <span class="text-xs text-dark">Direct</span>
          </span>
          <span class="badge badge-md badge-dot me-4 d-block text-start">
            <i class="bg-dark"></i>
            <span class="text-xs text-dark">Organic</span>
          </span>
          <span class="badge badge-md badge-dot me-4 d-block text-start">
            <i class="bg-secondary"></i>
            <span class="text-xs text-dark">Referral</span>
          </span>
        </div>
      </div>
    </div>
    <div class="p-3 pt-0 pb-0 card-footer d-flex align-items-center">
      <div class="w-60">
        <p class="text-sm">
          More than <b>1,200,000</b> sales are made using referral marketing,
          and <b>700,000</b> are from social media.
        </p>
      </div>
      <div class="w-40 text-end">
        <a class="mb-0 btn bg-light text-end" href="javascript:;">Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
//C:\Front_End\KB_cloud\KB_Cloud\FE\vue-material-dashboard-2-pro-v3.1.0\src\views\dashboards\components\ChannelsChartCard.vue
//C:\Front_End\KB_cloud\KB_Cloud\FE\vue-material-dashboard-2-pro-v3.1.0\src\views\pages\components\DoughnutChart.vue
// import PieChart from "@/examples/Charts/PieChart.vue";
// import DoughnutChart from "@/examples/Charts/DoughnutChart.vue";
export default {
  name: "ChannelsChartCard",
  components: {
    // PieChart,
    // DoughnutChart
  },
};
</script>
