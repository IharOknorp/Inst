<template>
    <div>
        <Item :questions="questions" :answers="answers"/>
    </div>
</template>

<script>
    import Item from './Item.vue'

    export default {
        components: {
            Item
        },
        name: 'Questions',
        data() {
            return {
                error: '',
            }
        },
        props:['questions', 'answers'],

        methods: {

        }
    }
</script>
