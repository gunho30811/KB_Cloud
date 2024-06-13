<template>
    <div>
      <Sidenav />
      <div class="main-content">
        <h1>forms</h1>
        <!-- Account page content -->
        <div class="row">
      <div class="col-lg-6">
        <h4>지출 입력 페이지</h4>
      </div>
      
    </div>
    <div class="mt-4 row">
      <div class="card">
        <div class="card-body">
          <div class="row mt-4">
            <div class="col-3">
              <material-input
                id="collection"
                variant="dynamic"
                label="날짜"
              >
              </material-input>
              
            </div>
            <div class="col-3">
              <material-input id="price" variant="dynamic" label="자산" />
            </div>
            <div class="col-3">
              <material-input
                id="quantity"
                variant="dynamic"
                label="금액"
              />
            </div>
            <div class="col-3">
              <material-input
                id="quantity"
                variant="dynamic"
                label="분류"
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <material-input id="name" variant="dynamic" label="메모" />
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="mt-2 mb-0 btn bg-gradient-success"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidenav from "@/components/Sidenav.vue";
  import Quill from "quill";
  import Choices from "choices.js";
  import MaterialInput from "@/components/MaterialInput.vue";

  export default {
    name: "Account",
    components: {
      Sidenav,
      MaterialInput
    },
    mounted() {
      if (document.getElementById("edit-description-edit")) {
        new Quill("#edit-description-edit", {
          theme: "snow", // Specify theme in configuration
        });
      }
      this.getChoices("choices-category-edit");
      this.getChoices("choices-color-edit");
      this.getChoices("choices-currency-edit");

      if (document.getElementById("choices-tags-edit")) {
        var tags = document.getElementById("choices-tags-edit");
        const examples = new Choices(tags, {
          removeItemButton: true,
          allowHTML: true,
        });

        examples.setChoices(
          [
            {
              value: "One",
              label: "Expired",
              disabled: true,
            },
            {
              value: "Two",
              label: "Out of Stock",
              selected: true,
            },
          ],
          "value",
          "label",
          false
        );
      }
    },
    methods: {
      getChoices(id) {
        if (document.getElementById(id)) {
          var element = document.getElementById(id);
          return new Choices(element, {
            searchEnabled: false,
            allowHTML: true,
          });
        }
      },
    },
  };


  </script>
  
  <style scoped>
  .main-content {
    margin-left: 250px; /* Adjust this value to match your sidebar width */
    padding: 20px;
  }
  </style>
  