<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12 ms-auto">
        <div class="mb-4 d-flex">
          <div class="mt-1 pe-4 position-relative ms-auto">
            <p class="mb-2 text-xs text-secondary font-weight-bold">
              Team members:
            </p>
            <div class="d-flex align-items-center justify-content-center">
              <div class="avatar-group">
                <a
                  href="javascript:;"
                  class="avatar avatar-sm rounded-circle"
                  data-bs-toggle="tooltip"
                  title="Jessica Rowland"
                >
                  <img
                    alt="Image placeholder"
                    src="../../assets/img/team-1.jpg"
                    class
                  />
                </a>
                <a
                  href="javascript:;"
                  class="avatar avatar-sm rounded-circle"
                  data-bs-toggle="tooltip"
                  title="Audrey Love"
                >
                  <img
                    alt="Image placeholder"
                    src="../../assets/img/team-2.jpg"
                    class="rounded-circle"
                  />
                </a>
                <a
                  href="javascript:;"
                  class="avatar avatar-sm rounded-circle"
                  data-bs-toggle="tooltip"
                  title="Michael Lewis"
                >
                  <img
                    alt="Image placeholder"
                    src="../../assets/img/team-3.jpg"
                    class="rounded-circle"
                  />
                </a>
                <a
                  href="javascript:;"
                  class="avatar avatar-sm rounded-circle"
                  data-bs-toggle="tooltip"
                  title="Lucia Linda"
                >
                  <img
                    alt="Image placeholder"
                    src="../../assets/img/team-4.jpg"
                    class="rounded-circle"
                  />
                </a>
                <a
                  href="javascript:;"
                  class="avatar avatar-sm rounded-circle"
                  data-bs-toggle="tooltip"
                  title="Ronald Miller"
                >
                  <img
                    alt="Image placeholder"
                    src="../../assets/img/team-5.jpg"
                    class="rounded-circle"
                  />
                </a>
              </div>
            </div>
            <hr class="mt-0 vertical dark" />
          </div>
          <div class="ps-4">
            <button
              class="mt-3 mb-0 btn btn-outline-dark btn-icon-only"
              data-bs-toggle="modal"
              data-target="#new-board-modal"
            >
              <i class="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-xl-9">
        <div class="card card-calendar">
          <fullCalendar ref="calendar" :options="calendarOptions" />
        </div>
      </div>
      <div class="col-xl-3">
        <div class="row">
          <div class="mt-4 col-xl-12 col-md-6 mt-xl-0">
            <events-card
              :events="[
                {
                  icon: 'attach_money',
                  color: 'dark',
                  event: 'Cyber Week',
                  date: '27 March 2021, at 12:30 PM',
                },
                {
                  icon: 'notifications',
                  color: 'dark',
                  event: 'Meeting with Marry',
                  date: '24 March 2021, at 10:00 PM',
                },
                {
                  icon: 'auto_stories',
                  color: 'dark',
                  event: 'Book Deposit Hall',
                  date: '25 March 2021, at 9:30 AM',
                },
                {
                  icon: 'local_shipping',
                  color: 'dark',
                  event: 'Shipment Deal UK',
                  date: '25 March 2021, at 2:00 PM',
                },
                {
                  icon: 'palette',
                  color: 'dark',
                  event: 'Verify Dashboard Color Palette',
                  date: '26 March 2021, at 9:00 AM',
                },
              ]"
            />
          </div>
          <div class="mt-4 col-xl-12 col-md-6">
            <div class="card bg-gradient-dark">
              <div class="p-3 pb-0 bg-transparent card-header">
                <div class="row">
                  <div class="col-7">
                    <h6 class="mb-0 text-white">Productivity</h6>
                    <p class="text-sm text-white">
                      <i
                        class="fa fa-arrow-up text-success"
                        aria-hidden="true"
                      ></i>
                      <span class="font-weight-bold">4% more</span> in 2021
                    </p>
                  </div>
                  <div class="col-5 text-end">
                    <div class="dropdown me-3">
                      <a
                        id="dropdownTable"
                        class="cursor-pointer"
                        href="javascript:;"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        role="button"
                      >
                        <i class="material-icons text-white text-sm"
                          >settings</i
                        >
                      </a>
                      <ul
                        class="px-2 py-3 dropdown-menu dropdown-menu-end ms-n5"
                        aria-labelledby="dropdownTable"
                        data-popper-placement="bottom-start"
                      >
                        <li>
                          <a
                            class="dropdown-item border-radius-md"
                            href="javascript:;"
                            >Action</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item border-radius-md"
                            href="javascript:;"
                            >Another action</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item border-radius-md"
                            href="javascript:;"
                            >Something else here</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-0 card-body">
                <mini-line-chart
                  :chart="{
                    labels: [
                      'Apr',
                      'May',
                      'Jun',
                      'Jul',
                      'Aug',
                      'Sep',
                      'Oct',
                      'Nov',
                      'Dec',
                    ],
                    datasets: [
                      {
                        label: 'Visitors',
                        data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
                      },
                    ],
                  }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2';
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import EventsCard from "./components/EventsCard.vue";
import MiniLineChart from "./components/MiniLineChart.vue";
import { createEventId } from "./event-utils"; // Create this utility function if not already existing

export default {
  name: "CalendarPage",
  components: { FullCalendar, EventsCard, MiniLineChart },
  data() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: ''
        },
        initialView: "dayGridMonth",
        events: [
          { id: createEventId(), title: '+23000\n-30000', start: '2021-01-01' },
          { id: createEventId(), title: '+200\n-12000', start: '2021-01-02' },
        ],
        editable: true,
        selectable: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventContent: this.renderEventContent, // custom render function
      },
      currentEvents: [],
    };
  },
  methods: {
    handleDateSelect(selectInfo) {
      const swalWithBootstrapButtons = swal.mixin({
        customClass: {
          confirmButton: "btn btn-success btn-fill",
          cancelButton: "btn btn-danger btn-fill",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Create an Event",
          html: `
            <div>
              <input type="text" id="income-input" placeholder="Income" class="swal2-input">
              <input type="text" id="expense-input" placeholder="Expense" class="swal2-input">
            </div>
          `,
          showCancelButton: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            const income = document.getElementById("income-input").value;
            const expense = document.getElementById("expense-input").value;
            let calendarApi = selectInfo.view.calendar;
            calendarApi.unselect(); // clear date selection

            if (income || expense) {
              const title = `${income ? '+' + income : ''}\n${expense ? '-' + expense : ''}`;
              calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
              });
            }
          }
        });
    },
    handleEventClick(clickInfo) {
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove();
      }
    },
    renderEventContent(eventInfo) {
      const lines = eventInfo.event.title.split('\n');
      return {
        html: lines.map(line => `<div class="custom-event-content" style="color: ${line.startsWith('+') ? 'blue' : 'red'};">${line}</div>`).join('')
      }
    },
    handleEvents(events) {
      this.currentEvents = events;
    },
  },
};
</script>

<style>
#fullCalendar {
  min-height: 400px;
}

.el-loading-spinner .path {
  stroke: #66615b !important;
}

.custom-event-content {
  background-color: white;
}

/* Custom styles for FullCalendar buttons */
.fc-button {
  background-color: blue;
  border: none;
  color: white;
}

.fc-button:hover {
  background-color: darkblue;
}

.fc-button-primary:not(:disabled).fc-button-active, .fc-button-primary:not(:disabled):active {
  background-color: darkblue;
}

.fc-button-primary {
  background-color: blue;
  border-color: blue;
}
</style>
