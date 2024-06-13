<template>
    <div class="container mt-3">
      <h2>Expenses List</h2>
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Date</th>
            <th>Asset</th>
            <th>Money</th>
            <th>Memo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="expense in expenses" :key="expense.id">
            <td>{{ expense.id }}</td>
            <td>{{ expense.category }}</td>
            <td>{{ expense.date }}</td>
            <td>{{ expense.asset }}</td>
            <td>{{ expense.money }}</td>
            <td>{{ expense.memo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        expenses: []
      };
    },
    mounted() {
      axios.get('/api/expenses')
        .then(response => {
          this.expenses = response.data;
        })
        .catch(error => {
          console.error('Failed to fetch expenses:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
  }
  .table-dark {
    color: #fff;
    background-color: #343a40;
  }
  </style>
  