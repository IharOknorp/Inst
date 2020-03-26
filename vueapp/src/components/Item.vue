<template>
    <div>
        <div v-for="question in questions" v-bind:key="question._id">
            <div v-if="question.index == getCurrentlyIndex()">
                <pre v-highlightjs><code class="javascript">{{question.questionText2}}</code></pre>

                <b-form-group v-bind:label='question.questionText'>
                    <b-form-radio-group
                            v-model="selected"
                            :options="getOptions(question)"
                            name="radios-stacked"
                            stacked
                    ></b-form-radio-group>
                </b-form-group>

<!--                <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>-->
                <div v-if="question.index < 1">
                <b-button
                        :disabled="selected == ''"
                        variant="success"
                        @click="clickButton(question._id, selected )"
                >
                    Ответить и перейти к след. вопросу
                </b-button>
                </div>
                <div v-else>
                    <b-button
                            variant="success"
                            @click="clickButton2(question._id, selected )"
                    >
                        Ответить и Показать Результаты
                    </b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'highlight.js/styles/agate.css';
    export default {
        name: "QuestionItem",
        props: ['questions', 'answers'],
        data() {
            return {
                selected: '',
                currentlyIndex: 0,


            }
        },
        methods: {
            clickButton(id, selected) {
                this.answers.push({id,selected })
                ++this.currentlyIndex
                this.selected = ''
            },
            clickButton2(id, selected) {
                this.answers.push({id,selected })

            },
            getCurrentlyIndex() {
                return this.currentlyIndex
            },
            getOptions(val){
                return Object.entries(val.options).map(([key, value]) => {
                    return { text: value, value: key   }
                })
            }
        }
    }
</script>

<style>

</style>