// pages/index.vue
<template>
    <div
    class="wrapper bg-white absolute top-4 w-full left-0 lg:!w-[98.5%] h-[95%] lg:!h-[90vh] flex flex-col gap-2 justify-center items-center ">
   
        <SectionTitle title="اضافة صنف مخزن قطع الغيار" />
        <DynamicForm :fields="formFields" />
        <div class="flex w-full  justify-center items-center gap-5">
            <ExportTools :tableHeader="tableHeader"/>
            <ButtonsAdd :formDate="formDate"/>
        </div>
        <Table :header="tableHeader" />

    </div>
</template>

<script setup>

    const store = useItemStore();
    const formStore = useFormStore();
    const formDate = ref({});
    function updateFormDate(data) {
        formDate.value = data;
    }
// const initialData = store.items;
const reportTitle = "تقرير طلب صرف";
const formFields = [
    { name: 'sparePartsName', label: ' اسم قطعة الغيار', type: 'text' },
    { name: 'sparePartsCategoriy', label: ' تصنيف قطعة المعدة', type: 'text' },
    { name: 'storekeeper', label: 'رقم قطعة الغيار', type: 'number', placeholder: 'Enter sotre Kepper name' },
    { name: 'sparePartsCode', label: ' الوحدة', type: 'number', placeholder: 'Enter quantity' },
    { name: 'miniNumber', label: 'الحد الادني من رصيد قطع الغيار', type: 'number', placeholder: 'Enter sotre Kepper name' },
];
const tableHeader = [
        { name: 'رقم الاذن', key: 'id' },
        { name: 'اسم قطع الغيار', key: 'reportType' },
        { name: 'الكود', key: 'code' },
        { name: 'الكمية الواردة', key: 'quantity' },
        { name: 'امين المخزن', key: 'storekeeper' },
        { name: 'التاريخ', key: 'date' }
];

const items =  [
    {
        id:1,
        sparePartsName:'قطعة الغيار',
        sparePartsCategoriy:'تصنيف قطعة الغيار',
        storekeeper: 1,
        sparePartsCode: 1,
        miniNumber: 1
    },
    {
        id:1,
        sparePartsName:'قطعة الغيار',
        sparePartsCategoriy:'تصنيف قطعة الغيار',
        storekeeper: 1,
        sparePartsCode: 1,
        miniNumber: 1
    },
    {
        id:1,
        sparePartsName:'قطعة الغيار',
        sparePartsCategoriy:'تصنيف قطعة الغيار',
        storekeeper: 1,
        sparePartsCode: 1,
        miniNumber: 1
    } ,{
        id:1,
        sparePartsName:'قطعة الغيار',
        sparePartsCategoriy:'تصنيف قطعة الغيار',
        storekeeper: 1,
        sparePartsCode: 1,
        miniNumber: 1
    }
]

const itemsStore = store.items(items);



</script>