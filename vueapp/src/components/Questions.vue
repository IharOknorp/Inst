<template>
    <div>
        {{currentlyIndex}}
        <Item :question="questions[currentlyIndex]" :onChangeIndex="changeIndex" :currentlyIndex="currentlyIndex"/>
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
                currentlyIndex: 0,
            }
        },
        props:{questions: {}},

        methods: {
            changeIndex(val) {
                console.log("FJDFSDFSDF")
                console.log(val)
                this.currentlyIndex = val;
            }
        }
    }
</script>
