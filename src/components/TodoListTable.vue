<template>
  <h1>Welcome to ToDoLists</h1>
  <table class="table table-bordered">
    <thead>
    <tr>
      <th scope="col">Priorität</th>
      <th scope="col">Aufgabe</th>
      <th scope="col">Fälligkeitsdatum</th>
      <th scope="col">Archiv</th>
      <th scope="col">erledigt</th>

    </tr>
    </thead>

    <tbody>
    <tr v-for="todoList in TodoLists" :key="todoList.id">
      <td>{{todoList.priorität }}</td>
      <td>{{todoList.aufgabe}}</td>
      <td>{{todoList.abgabedatum}}</td>
      <td>{{todoList.archiv ? 'archivieren':'nicht archivieren'}}</td>
      <td>{{todoList.erledigt ? 'erledigt':'nicht erledigt'}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'TodoListTable',
  props: {
    person: {

      type: Object,
      required: true

    }
  }
}
</script>

<style scoped>

</style>