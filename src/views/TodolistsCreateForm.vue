<template>
<button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#todoLists-create-offcanvas" aria-controls="#todoLists-create-offcanvas">
    <i class="bi bi-todoLists-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="todoLists-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New TodoLists</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="todoLists-create-form" novalidate>
        <div class="mb-3">
          <label for="Aufgabe" class="form-label">Aufgabe</label>
          <input type="text" class="form-control" id="aufgabe" v-model="aufgabe" required>
          <div class="invalid-feedback">
            Bitte gib eine Aufgabe ein.
          </div>
        </div>
        <div class="mb-3">
          <label for="abgabedatum" class="form-label">Fälligkeitsdatum</label>
          <input type="text" class="form-control" id="abgabedatum" v-model="abgabedatum" required>
          <div class="invalid-feedback">
            Bitte gib ein Fälligkeitsdatum ein.
          </div>
        </div>
        <div class="mb-3">
          <label for="archiv" class="form-label">archivieren</label>
          <select id="archiv" class="form-select" v-model="archiv" required>
            <option value="" selected disabled>Choose...</option>
            <option value="archivieren">Ja</option>
            <option value="nicht archivieren">Nein</option>
          </select>
          <div class="invalid-feedback">
            Bitte gib an, ob es archiviert werden soll.
          </div>
        </div>
        <div class="mb-3">
          <label for="Priorität" class="form-label">Priorität</label>
          <select id="priorität" class="form-select" v-model="priorität" required>
            <option value="" selected disabled>Choose...</option>
            <option value="dringend">nicht dringend</option>
            <option value="wichtiger dringend">wichtiger dringend</option>
            <option value="nicht dringend">nicht dringend</option>
          </select>
          <div class="invalid-feedback">
            Bitte gib die Priorität an.
          </div>
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="erledigt" v-model="erledigt">
            <label class="form-check-label" for="erledigt">
              Erledigt
            </label>
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createTodoList">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="todoList in TodoLists " :key="todoList.id">
      <Todo-List-Table :todoList="TodoList"></Todo-List-Table>
    </div>
  </div>
</template>

<script>
import TodoListTable from "@/components/TodoListTable";
export default {
  name: "TodolistCreateForm",
  components: {TodoListTable},
  data () {
    return {
      aufgabe: '',
      priorität: '',
      abgabedatum: '',
      archiv: '',
      erledigt: false,
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createTodoList () {
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/TodoLists'
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const todoList = JSON.stringify({
          aufgabe: this.aufgabe,
          priorität: this.priorität,
          abgabedatum: this.abgabedatum,
          archiv: this.archiv,
          erledigt: this.erledigt
        })
        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: todoList,
          redirect: 'follow'
        }
        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('todoLists-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>