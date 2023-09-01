<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Simple Dialog</div>
    </q-card-section>
    <q-card-actions>
      <q-btn label="Aceptar" @click="$q.dialog.hide()" />
      <q-btn label="Cancelar" @click="$q.dialog.hide()" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {};
</script>
