<template>
  <div class="container">
    <Sidenav />
    <div class="main-content py-4 container-fluid">
      <h1>Calendar</h1>
      <div class="row">
        <div class="col-xl-12">
          <div class="card card-calendar">
            <CalendarComponent :events="events" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarComponent from "@/components/calendar.vue";
import Sidenav from "@/components/Sidenav.vue";

export default {
  name: "CalendarPage",
  components: { CalendarComponent, Sidenav },
  data() {
    return {
      events: [
        { date: '2024-06-01', income: 23000, expense: 30000 },
        { date: '2024-06-02', income: 200, expense: 12000 },
        { date: '2024-06-05', income: 21200, expense: 121000 },
      ],
    };
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
