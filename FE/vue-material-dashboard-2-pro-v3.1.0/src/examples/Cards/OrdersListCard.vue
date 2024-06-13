<template>
  <div class="mb-4 card">
    <div class="pb-0 card-header d-flex justify-content-between align-items-center">
      <h5>{{ title }}</h5>
      <div>
        <select class="form-select form-select-sm">
          <option v-for="(option, index) in options" :key="index" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
    </div>
    <div class="px-0 pt-0 pb-2 card-body">
      <div class="p-0 table-responsive">
        <table class="table mb-0 align-items-center">
          <thead>
            <tr>
              <th
                v-for="(header, index) of headers"
                :key="index"
                :class="index >= 1 ? 'text-center ps-2' : ''"
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                <h6>{{ header }}</h6>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrdersListCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    headers: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => []
    },
    lists: {
      type: Array,
      default: () => [],
      values: Array,
      title: String,
      order: String,
      info: String,
      image: String,
      icon: String,
    },
  },
};
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.form-select {
  width: auto;
}
.form-select-sm {
  font-size: .875rem;
  line-height: 1.5;
  border-radius: .2rem;
}
</style>
