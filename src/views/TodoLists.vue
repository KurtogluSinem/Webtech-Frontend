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
    <td>{{todolist.aufgabe}}</td>
    <td>{{todolist.abgabe_Datum}}</td>
    <td>{{todolist.archiv}}</td>
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
  data(){
    return{
      TodoLists: [
        {
          id: 1,
          abgabe_Datum: '2008-11-11',
          archiv: true,
          aufgabe: 'lernen',
          erledigt: false,
          löschen: false,
          noch_zu_erledigen_task: false,
          rückgängig: false,
          speichern: true
        },
        {
          id: 2,
          abgabe_Datum: '2009-11-11',
          archiv: true,
          aufgabe: 'spanisch lernen',
          erledigt: false,
          löschen: false,
          noch_zu_erledigen_task: false,
          rückgängig: false,
          speichern: true
        }
      ]
    }
  }
}

</script>

<style scoped>

</style>