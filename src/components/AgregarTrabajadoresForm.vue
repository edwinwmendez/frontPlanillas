<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md" style="max-width: 400px; margin: auto">
      <q-card-section>
        <div class="text-h6 q-mb-md">Agregar Trabajador</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="addWorker" class="q-gutter-md">
          <q-input
            outlined
            v-model="worker.secuencia"
            label="Secuencia"
            class="q-mb-md"
          />
          <q-input
            outlined
            v-model="worker.situacion"
            label="Situación"
            class="q-mb-md"
          />
          <q-input
            outlined
            v-model="worker.nombre"
            label="Nombre"
            class="q-mb-md"
          />
          <q-input
            outlined
            v-model="worker.apellido"
            label="Apellido"
            class="q-mb-md"
          />
          <q-input
            outlined
            v-model="worker.cargo"
            label="Cargo"
            class="q-mb-md"
          />

          <div class="q-mt-md row justify-around">
            <q-btn color="primary" label="Agregar" type="submit" />
            <q-btn color="negative" label="Cancelar" @click="cancel" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      worker: {
        secuencia: "",
        situacion: "",
        nombre: "",
        apellido: "",
        cargo: "",
      },
    };
  },
  methods: {
    addWorker() {
      // Código para agregar el trabajador
      console.log("Agregar trabajador:", this.worker);
    },
    cancel() {
      // Redirige al usuario a la página anterior
      this.$router.go(-1);
    },
  },
};
</script>
