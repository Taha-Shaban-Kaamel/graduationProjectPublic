// eventBus.js

import { reactive } from 'vue';

const eventBus = reactive({});

export const emitEvent = (eventName, data) => {
    console.log('eventBus.js: emitEvent', eventName, data);
    
    eventBus[eventName] = data;
};

export const onEvent = (eventName, callback) => {
    watch(() => eventBus[eventName], callback);
};