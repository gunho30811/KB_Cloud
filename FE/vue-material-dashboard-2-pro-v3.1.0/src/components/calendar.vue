<template>
    <div class="card widget-calendar">
      <h6 class="mb-0">{{ title }}</h6>
      <div class="d-flex">
        <div class="mb-0 text-sm p font-weight-bold widget-calendar-day">
          {{ day }}
        </div>
        <div class="mb-1 text-sm p font-weight-bold widget-calendar-year">
          {{ year }}
        </div>
      </div>
    <div class="p-6 card-body">
      <div :id="id" data-toggle="widget-calendar"></div>
    </div>
  </div>
  </template>
  
  <script>
  import { Calendar } from "@fullcalendar/core";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";

  let calendar;

  export default {
  name: "calendar",
  props: {
    id: {
      type: String,
      default: "widget-calendar",
    },
    initialView: {
      type: String,
      default: "dayGridMonth",
    },
    initialDate: {
      type: String,
      default: new Date().toISOString().slice(0, 10),
    },
    events: {
      type: Array,
      default: () => [],
    },
    selectable: {
      type: Boolean,
      default: true,
    },
    editable: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    calendar = new Calendar(document.getElementById(this.id), {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: this.initialView,
      selectable: this.selectable,
      editable: this.editable,
      events: this.events,
      initialDate: this.initialDate,
      headerToolbar: {
        right: "prev,next today",
        left: "title",
      },
      views: {
        month: {
          titleFormat: { month: "long", year: "numeric" },
        },
        agendaWeek: {
          titleFormat: { month: "long", year: "numeric", day: "numeric" },
        },
        agendaDay: {
          titleFormat: { month: "short", year: "numeric", day: "numeric" },
        },
      },
      eventContent: this.renderEventContent,
    });

    calendar.render();
  },
  beforeUnmount() {
    if (calendar) {
      calendar.destroy();
    }
  },
  methods: {
    renderEventContent(arg) {
      const income = arg.event.extendedProps.income;
      const expense = arg.event.extendedProps.expense;
      return {
        html: `<div><b>${arg.event.title}</b></div>
               <div style="color: blue; background-color: white;"> + ${income}</div>
               <div style="color: red; background-color: white;"> - ${expense}</div>`,
      };
    },
  },
};

  </script>
  
  <style scoped>
  .main-content {
    margin-left: 250px; /* Adjust this value to match your sidebar width */
    padding: 20px;
  }
  .fc .fc-button-primary {
    background: #4caf50 !important;
    border-color: #4caf50 !important;
  }
  .fc .fc-button-primary:hover {
    background: #4caf50 !important;
    border-color: #4caf50 !important;
  }
  </style>
  