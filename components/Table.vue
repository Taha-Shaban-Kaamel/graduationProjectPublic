<template>
  <div class="w-full h-full rounded-lg !overflow-scroll">
    <table id="capture"
      class="table-auto lg:h-auto h-24 rounded-lg relative !overflow-scroll w-full border-collapse border border-gray-300">
      <thead class="bg-[#E5E1E1] w-[100%] sticky  top-0 z-10 rounded-lg text-center border-0">
        <tr>
          <th class="px-4 py-2" v-for="title in header">{{ title.name }}</th>
          <th>الاجرائات</th>
        </tr>
      </thead>
      <tbody class="rounded-lg">
        <tr class="border-t border-[2px] text-center rounded-lg  border-[#A09C9C]" v-for="(item, index) in items"  :key="index">
          <td class=" px-4 py-2 ">{{index + 1 }}</td>
          <td class=" px-4 py-2 ">{{item.reportType}}</td>
          <td class=" px-4 py-2">{{item.code }}</td>
          <td class=" px-4 py-2">{{item.quantity }}</td>
          <td class=" px-4 py-2">{{item.storekeeper }}</td>
          <td class=" px-4 py-2">{{item.date }}</td>
          <td class="flex items-center justify-center">
            <button @click="editItem(index)" class=" text-white rounded">
              <img :src="edit" alt="edit icon">
            </button>
            <button @click="deleteItem(index)" class=" text-white rounded">
              <img :src="deleteIcon" alt="" srcset="">
            </button>
            <button @click="duplicateItem(index)" class=" text-white rounded">
              <img :src="eye" alt="dublicate item icon" srcset="">
            </button>
          </td>
        </tr>
      </tbody>
    </table>
   
  </div>
</template>

<script setup>
import { useItemStore } from '~/stores/itemStore';
import edit from '../assets/icons/Edit.png';
import eye from '../assets/icons/Eye.png';
import deleteIcon from '../assets/icons/Delete.png'
import jsPDF from 'jspdf';

import html2canvas from 'html2canvas';
import autoTable from 'jspdf-autotable';
const store = useItemStore();
const items = store.items; // Bind store items to the table
const props = defineProps({
  header:{
    type:Array ,
    required:true
  }
})
console.log(items);

const formData = ref({});
const isEditing = ref(false);
const editIndex = ref(null);

// Function to edit an item
function editItem(index) {
  const item = items[index];
  store.setSelectedItem(item);


}
// Function to delete an item
function deleteItem(index) {
  store.deleteItem(index); // Remove the item from the store
}

function duplicateItem(index) {
  store.duplicateItem(index); // Call the duplicate function in the store
}

function generatepdf() {
    var columns = ["الرقم", "Name", "Country"];
    var rows = [
        [1, "Shaw", "Tanzania"],
        [2, "Nelson", "Kazakhstan"],
        [3, "Garcia", "Madagascar"],
    ];

    // Initialize jsPDF
    var doc = new jsPDF('p', 'pt');

    // Add the custom font
    doc.addFileToVFS("Amiri-Regular.ttf", amiriFontBase64);
    doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");

    // Set the font to the custom font
    doc.setFont("Amiri");
    doc.getTextDimensions("مدحبا")
    // Generate the table
    doc.table(1, 1, rows, columns, { autoSize: true });
    
    // Save the PDF
    doc.save('table.pdf');
}


</script>
