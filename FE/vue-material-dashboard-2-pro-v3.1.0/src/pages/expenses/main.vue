<template>
  <div class="container">
    <Sidenav />

    <!--자산 내역 그래프-->
    <div class="main-content py-4 container-fluid">
      <h1>Main</h1>
      <div class="row">
        <div class="col-md-6">
          <h5 class="mb-0">자산 내역</h5>
          <p class="mb-0 text-sm">
            수입/지출 내역과 투자 내역을 확인하세요.
          </p>
        </div>
      </div>
      <div class="mt-1 row">
        <div class="col-12">
          <AssetGraph />
        </div>

      <!--수입/지출 상세 내역-->
      <div class="py-4 container-fluid">
        <div class="col-md-6">
          <br /><br />
          <h5 class="mb-0">수입/지출 내역</h5>
          <p class="mb-0 text-sm">
            수입/지출 상세 내역을 확인하세요.
          </p>
        </div>
        <div class="mt-4 row">
          <div class="col-12">
            <div class="card">
              <div class="table-responsive">
                <table id="datatable-basic" class="table table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        분류
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        날짜
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        자산
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        금액
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        메모
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-sm font-weight-normal">편의점</td>
                      <td class="text-sm font-weight-normal">2024/06/12</td>
                      <td class="text-sm font-weight-normal">토스뱅크</td>
                      <td class="text-sm font-weight-normal">6100</td>
                      <td class="text-sm font-weight-normal">초콜릿</td>
                    </tr>
                    <tr>
                      <td class="text-sm font-weight-normal">의료</td>
                      <td class="text-sm font-weight-normal">2024/06/11</td>
                      <td class="text-sm font-weight-normal">현금</td>
                      <td class="text-sm font-weight-normal">6300</td>
                      <td class="text-sm font-weight-normal">병원</td>
                    </tr>
                    <tr>
                      <td class="text-sm font-weight-normal">쇼핑</td>
                      <td class="text-sm font-weight-normal">2024/06/11</td>
                      <td class="text-sm font-weight-normal">계좌이체</td>
                      <td class="text-sm font-weight-normal">62000</td>
                      <td class="text-sm font-weight-normal">옷</td>
                    </tr>
                    <tr>
                      <td class="text-sm font-weight-normal">편의점</td>
                      <td class="text-sm font-weight-normal">2024/06/10</td>
                      <td class="text-sm font-weight-normal">토스뱅크</td>
                      <td class="text-sm font-weight-normal">2000</td>
                      <td class="text-sm font-weight-normal">간식</td>
                    </tr>
                    <tr>
                      <td class="text-sm font-weight-normal">쇼핑</td>
                      <td class="text-sm font-weight-normal">2024/06/09</td>
                      <td class="text-sm font-weight-normal">계좌이체</td>
                      <td class="text-sm font-weight-normal">33000</td>
                      <td class="text-sm font-weight-normal">아이패드</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--투자 내역-->
      <div class="py-4 container-fluid">
        <div class="col-md-6">
          <h5 class="mb-0">투자 내역</h5>
          <p class="mb-0 text-sm">
            투자 상세 내역을 확인하세요.
          </p>
        </div>
        <div class="mt-4 row">
          <div class="col-12">
            <div class="card">
              <div class="table-responsive">
                <table id="datatable-basic" class="table table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        거래일자
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        종목코드
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        종목명
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        구분
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        거래수량
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        거래단가
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        거래금액
                      </th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        수익률
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-sm font-weight-normal">2024/06/10</td>
                      <td class="text-sm font-weight-normal">AAPL</td>
                      <td class="text-sm font-weight-normal">애플</td>
                      <td class="text-sm font-weight-normal">현금</td>
                      <td class="text-sm font-weight-normal">1</td>
                      <td class="text-sm font-weight-normal">$207.16</td>
                      <td class="text-sm font-weight-normal">$207.16</td>
                      <td :class="{'text-red': 3.73 > 0, 'text-blue': 3.73 < 0}">
                        3.73
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-weight-normal">2024/06/09</td>
                      <td class="text-sm font-weight-normal">TSLA</td>
                      <td class="text-sm font-weight-normal">테슬라</td>
                      <td class="text-sm font-weight-normal">현금</td>
                      <td class="text-sm font-weight-normal">1</td>
                      <td class="text-sm font-weight-normal">$170.58</td>
                      <td class="text-sm font-weight-normal">$170.58</td>
                      <td :class="{'text-red': -9.12 > 0, 'text-blue': -9.12 < 0}">
                        -9.12
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-weight-normal">2024/06/09</td>
                      <td class="text-sm font-weight-normal">NVDA</td>
                      <td class="text-sm font-weight-normal">엔비디아</td>
                      <td class="text-sm font-weight-normal">현금</td>
                      <td class="text-sm font-weight-normal">1</td>
                      <td class="text-sm font-weight-normal">$120.92</td>
                      <td class="text-sm font-weight-normal">$120.92</td>
                      <td :class="{'text-red': 0.13 > 0, 'text-blue': 0.13 < 0}">
                        0.13
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-weight-normal">2024/06/09</td>
                      <td class="text-sm font-weight-normal">035720</td>
                      <td class="text-sm font-weight-normal">카카오</td>
                      <td class="text-sm font-weight-normal">현금</td>
                      <td class="text-sm font-weight-normal">2</td>
                      <td class="text-sm font-weight-normal">40000</td>
                      <td class="text-sm font-weight-normal">80000</td>
                      <td :class="{'text-red': -10.12 > 0, 'text-blue': -10.12 < 0}">
                        -10.12
                      </td>
                    </tr>
                    <tr>
                      <td class="text-sm font-weight-normal">2024/06/09</td>
                      <td class="text-sm font-weight-normal">NVDA</td>
                      <td class="text-sm font-weight-normal">엔비디아</td>
                      <td class="text-sm font-weight-normal">현금</td>
                      <td class="text-sm font-weight-normal">1</td>
                      <td class="text-sm font-weight-normal">$120.92</td>
                      <td class="text-sm font-weight-normal">$120.92</td>
                      <td :class="{'text-red': 20.93 > 0, 'text-blue': 20.93 < 0}">
                        20.93
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

  
</div>
</template>

<script>
import Sidenav from "@/components/Sidenav.vue";
import DefaultLineChart from "@/components/DefaultLineChart.vue";
import AssetGraph from "@/components/AssetGraph.vue";

export default {
  name: "MainPage",
  components: {
    Sidenav,
    DefaultLineChart,
    AssetGraph,
  },
};
</script>

<style scoped>
.main-content {
  margin-left: 250px; /* Adjust this value to match your sidebar width */
  padding: 20px;
}
.text-red {
  color: red;
}
.text-blue {
  color: blue;
}
</style>
