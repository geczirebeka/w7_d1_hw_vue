import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                { name: 'Buy shopping', isHighPriority: true},
                { name: 'Clean Bathroom', isHighPriority: false},
                { name: 'Car MOT', isHighPriority: false}
            ],
            newTodo: ''
        },
        methods: {
            saveNewTodo: function() {
                this.todos.push({
                    name: this.newTodo,
                    isHighPriority: this.priority
                });
                this.newTodo = "";
            }
        }
    });
});