<template>
  <div class="d-flex">
    <Sidenav />

    <div class="py-4 container-fluid">
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