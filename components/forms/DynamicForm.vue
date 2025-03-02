<template>
  <form @input="updateFormData">
    <div v-for="field in fields" :key="field.name" class="form-group">
      <label :for="field.name">{{ field.label }}</label>
      <input v-if="field.type === 'text' || field.type === 'number'" :type="field.type" :name="field.name" v-model="formData[field.name]" />
      <!-- Add other input types as needed -->
    </div>
  </form>
</template>

<script setup>
import { defineProps, defineEmits, reactive } from 'vue';

const props = defineProps({
  fields: Array
});

const emit = defineEmits(['update:formData']);

const formData = reactive({});

function updateFormData() {
  emit('update:formData', formData);
}
</script>

<style scoped>
/* Your styles here */
</style>