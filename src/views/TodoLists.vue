<template>

  <h1></h1>
  <div class="container-fluid">
    <todo-list-table :todoLists="this.todoLists"></todo-list-table>

  </div>
  <todolist-create-form @created="addTodoList"></todolist-create-form>
</template>

<script>


import TodolistCreateForm from "@/views/TodolistsCreateForm"
import TodoListTable from "@/components/TodoListTable";
export default {
  name: "TodoLists",

  components: {TodoListTable, TodolistCreateForm},
  data() {
    return {
      todoLists: []
    }
  },
  methods: {
    addTodoList(todoListLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + todoListLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(todoList => this.todoLists.push(todoList))
          .catch(error => console.log('error', error))
    }
  },
  mounted() {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/TodoLists'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(todoList => {
          this.todoLists.push(todoList)
        }))
        .catch(error => console.log('error', error))
  }
}

</script>

<style scoped>

</style>

