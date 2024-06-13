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
    </div>
  </div>