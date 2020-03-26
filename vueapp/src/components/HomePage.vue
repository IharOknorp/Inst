<template>
    <div class="container">
        <h1>Экзамен по основам JS</h1>
        <div v-if=isStart>
            <b-button variant="danger" v-on:click="onCLickStart">Начать тестирование</b-button>
        </div>
        <div v-else>
            <Questions v-bind:questions="questions"/>
        </div>
    </div>
</template>

<script>
    import Questions from './Questions.vue'
    import PostService from "../PostService";

    export default {
        components: {
            Questions
        },
        name: "HomePage",
        data() {
            return {
                isStart: true,
                questions: [],
            }
        },
        async created() {
            try {
                this.questions = await PostService.getPosts();
            } catch (err) {
                this.error = err.message;
            }
        },
        methods: {
            onCLickStart() {
                this.isStart = false;
            }
        }
    }
</script>

<style scoped>
    a.knopka {
        color: #fff; /* цвет текста */
        text-decoration: none; /* убирать подчёркивание у ссылок */
        user-select: none; /* убирать выделение текста */
        background: rgb(212,75,56); /* фон кнопки */
        padding: .7em 1.5em; /* отступ от текста */
        outline: none; /* убирать контур в Mozilla */
    }
    a.knopka:hover { background: rgb(232,95,76); } /* при наведении курсора мышки */
    a.knopka:active { background: rgb(152,15,0); } /* при нажатии */
</style>