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
          @click="addWorker"
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
export default {
  data() {
    return {
      columns: [
        {
          name: "codigoModular",
          required: true,
          label: "Código Modular",
          align: "left",
          field: (row) => row.codigoModular,
        },
        {
          name: "secuencia",
          required: true,
          label: "Secuencia",
          align: "left",
          field: (row) => row.secuencia,
        },
        { name: "paterno", label: "Paterno", align: "left", field: "paterno" },
        { name: "materno", label: "Materno", align: "left", field: "materno" },
        { name: "nombres", label: "Nombres", align: "left", field: "nombres" },
        {
          name: "planilla",
          label: "Planilla",
          align: "left",
          field: "planilla",
        },
        {
          name: "totalHaberes",
          label: "Total Haberes",
          align: "left",
          field: "totalHaberes",
        },
        {
          name: "totalDescuentos",
          label: "Total Descuentos",
          align: "left",
          field: "totalDescuentos",
        },
        {
          name: "liquidoPagar",
          label: "Líquido a Pagar",
          align: "left",
          field: "liquidoPagar",
        },
        { name: "actions", label: "Acciones", align: "left", field: "actions" },
      ],
      tableData: [
        {
          id: 1,
          codigoModular: "CM001",
          secuencia: "S001",
          paterno: "Pérez",
          materno: "Díaz",
          nombres: "Juan Carlos",
          planilla: "P1",
          totalHaberes: 2000,
          totalDescuentos: 200,
          liquidoPagar: 1800,
        },
        // A partir de aquí, datos ficticios
        ...Array.from({ length: 30 }).map((_, index) => ({
          id: index + 2,
          codigoModular: `CM${String(index + 2).padStart(3, "0")}`,
          secuencia: `S${String(index + 2).padStart(3, "0")}`,
          paterno: `ApellidoP${index + 2}`,
          materno: `ApellidoM${index + 2}`,
          nombres: `Nombre${index + 2}`,
          planilla: `P${(index % 5) + 1}`,
          totalHaberes: 1500 + index * 10,
          totalDescuentos: 100 + index * 5,
          liquidoPagar: 1400 + index * 10 - (100 + index * 5),
        })),
      ],

      pagination: {
        rowsPerPage: 5,
      },
    };
  },
  methods: {
    editWorker(worker) {
      // Aquí puedes poner el código para editar el trabajador
      // Por ejemplo, redireccionar a una página de edición o abrir un diálogo/modal
      console.log("Editar trabajador:", worker);
    },
    addWorker() {
      // Aquí puedes poner el código para agregar un nuevo trabajador
      // Por ejemplo, redireccionar a una página de creación o abrir un diálogo/modal para agregar un trabajador
      console.log("Agregar nuevo trabajador");
    },
  },
};
</script>
