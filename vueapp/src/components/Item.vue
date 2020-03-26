<template>
    <div>
        {{question}}
        <pre v-highlightjs><code class="javascript">{{question.questionText2}}</code></pre>
        <b-form-group v-bind:label='question.questionText'>
            <b-form-radio v-model="selected" name="some-radios" value="A">A: {{question.options['A']}}</b-form-radio>
            <b-form-radio v-model="selected" name="some-radios" value="B">B: {{question.options['B']}}</b-form-radio>
            <b-form-radio v-model="selected" name="some-radios" value="C">C: {{question.options['C']}}</b-form-radio>
            <b-form-radio v-model="selected" name="some-radios" value="D">D: {{question.options['D']}}</b-form-radio>
        </b-form-group>

        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
        <b-button
                :disabled="selected == ''"
                variant="success"
                v-on:click="clickButton"
        >
            Ответить и перейти к след. вопросу
        </b-button>
    </div>
</template>

<script>
    import 'highlight.js/styles/agate.css';
    export default {
        name: "QuestionItem",
        props: {
            question: {},
            onClickButton: Function,
            currentlyIndex: Number

        },
        data() {
            return {
                selected: '',
            }
        },
        methods: {
            clickButton() {
                console.log("11111")
                console.log( this.currentlyIndex)
                this.$parent.$options.methods.changeIndex(++this.currentlyIndex);
            }
        }
    }
</script>

<style>

</style>