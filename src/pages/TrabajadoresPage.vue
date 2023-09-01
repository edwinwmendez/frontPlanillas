<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <!-- Título y botón de agregar trabajador -->
      <q-toolbar>
        <q-toolbar-title> Lista de Trabajadores </q-toolbar-title>
        <q-space />
        <q-btn
          color="primary"
          icon="add"
          label="Agregar Trabajador"
          @click="agregarTrabajador"
        />
      </q-toolbar>

      <q-table
        :rows="tableData"
        row-key="id"
        :columns="columns"
        virtual-scroll
        :model-value="pagination"
        @update:modelValue="pagination = $event"
      >
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn icon="edit" @click="editWorker(props.row)" />
          </q-td>
        </template>
      </q-table>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import axios from "axios";
import SimpleDialog from "components/SimpleDialog.vue";

export default {
  data() {
    return {
      columns: [
        {
          name: "secuencia",
          label: "Secuencia",
          align: "left",
          field: "secuencia",
        },
        {
          name: "situacion",
          label: "Situación",
          align: "left",
          field: "situacion",
        },
        {
          name: "apellidos y nombres",
          label: "Apellidos y nombres",
          align: "left",
          field: (row) =>
            `${row.persona.paterno} ${row.persona.materno} ${row.persona.nombres}`,
        },
        {
          name: "cargo",
          label: "Cargo",
          align: "left",
          field: (row) => row.cargo.nombre_cargo,
        },
        { name: "actions", label: "Acciones", align: "left", field: "actions" },
      ],
      tableData: [],
      pagination: { rowsPerPage: 5 },
    };
  },
  setup() {
    const $q = useQuasar();

    $q.dialog({
      component: SimpleDialog,

      // props forwarded to your custom component
      componentProps: {
        text: "something",
        // ...more..props...
      },
    })
      .onOk(() => {
        console.log("OK");
      })
      .onCancel(() => {
        console.log("Cancel");
      })
      .onDismiss(() => {
        console.log("Called on OK or Cancel");
      });
  },

  components: {},

  created() {
    this.fetchWorkers();
  },
  methods: {
    async fetchWorkers() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/trabajadores/empleado/"
        );
        console.log("Respuesta de la API:", response.data); // Depuración
        this.tableData = response.data;
      } catch (error) {
        console.error("Hubo un error al obtener los datos:", error);
      }
    },
    agregarTrabajador() {
      this.$router.push({ name: "AgregarTrabajador" });
    },
  },
};
</script>
