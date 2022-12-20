<template>
<h1>Welcome to ToDoLists</h1>
  <table class="table table-bordered">
      <thead>
  <tr>
    <th scope="col">Priorität</th>
    <th scope="col">Tick</th>
    <th scope="col">Aufgabe</th>
    <th scope="col">Fälligkeitsdatum</th>
    <th scope="col">Actions</th>
  </tr>
  </thead>
      <div class="row" v-for="todolist in TodoLists" :key="todolist.id">
  <tbody>
  <tr>
    <th scope="row"></th>
    <td>{{todolist.id}}</td>
    <td>{{todolist.erledigt}}</td>
    <td>{{todolist.Aufgabe}}</td>
    <td>{{todolist.abgabedatum}}</td>
    <td>{{todolist.Archiv}}</td>
    <td>{{todolist.löschen}}</td>
    <td>{{todolist.nochZuErledigenTasks}}</td>
    <td>{{todolist.rückgängig}}</td>
    <td>{{todolist.speichern}}</td>

  </tr>

  <!-- <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
 <tr>
    <th scope="row">3</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">4</th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>-->

    </tbody>
    </div>
  </table>
</template>

<script>


export default {
  name: "TodoLists",
  data() {
    return {
      TodoLists: []
    }
  },
  mounted() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch("http://localhost:8080/api/v1/TodoLists", requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(todolist => {
          this.TodoLists.push(todolist)
        }))
        .catch(error => console.log('error', error))
  }
}

</script>

<style scoped>

</style>
