console.log('JS OK 1')

const {createApp} = Vue;
//*Creo un app vue


createApp({
    data() {
        return {
            message: 'Ciao'
        }
    }
}).mount('#app')