<template>
  <div class="wrapper bg-white absolute top-4 w-full left-0 lg:!w-[98.5%] h-[95%] lg:!h-[90vh] flex flex-col gap-2 justify-center items-center">
    <component :is="selectedReport" v-if="selectedReport" />
    <SectionTitle title=" قسم المعمل" />
    <ReportsReportMakerTable :header="tableHeader" :tableBody="tableBody" @update:tableBody="updateTableBody" />
    <ReportsReportMakerFooter :footerData="footer" @selectReport="handleReportChange" />
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    import SectionTitle from '/components/SectionTitle.vue';
    import ReportsReportMakerTable from '/components/reports/reportMaker/Table.vue';
    import ReportsReportMakerFooter from '/components/reports/reportMaker/Footer.vue';
    import ReportsLab from '/components/reports/lab.vue';
    import ReportsLab2 from '/components/reports/lab2.vue';

const selectedReport = ref(null);
const tableHeader = [
  { text: 'Column 1', value: 'column1' },
  { text: 'Column 2', value: 'column2' },
  { text: 'Column 3', value: 'column3' },
];
const tableBody = ref([
  { name: 'Item 1', code: 'A123', isChecked: false },
  { name: 'Item 2', code: 'B456', isChecked: false },
  { name: 'Item 3', code: 'C789', isChecked: false },
  { name: 'Item 4', code: 'D012', isChecked: false },
  { name: 'Item 5', code: 'E345', isChecked: false },
  { name: 'Item 6', code: 'F678', isChecked: false },
  { name: 'Item 7', code: 'G901', isChecked: false },
]);

const handleReportChange = (componentName) => {
  const components = {
    ReportsLab,
    ReportsLab2,
  };
  selectedReport.value = components[componentName] || null;
};

const footer = [
  { name: "تقرير معادلة الرماد", component: "ReportsLab" },
  { name: "تقرير الاقماح الواردة", component: "ReportsLab2" },
];
</script>

<style scoped>
/* Add any necessary styles here */
</style>
