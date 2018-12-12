<template>
  <div>
    <md-steppers :md-active-step.sync="steps.active" md-linear>
      <md-step id="first" md-label="First Step" :md-error="steps.firstStepError" md-description="Edit name" :md-done.sync="steps.first">
        <md-field :class="messageClass">
          <label>Type name</label>
          <md-input required maxlength="35" v-model="users[0].name"></md-input>
          <span class="md-error">There is an error</span>
        </md-field>
        <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
      </md-step>

      <md-step id="second" md-label="Second Step" :md-error="steps.secondStepError" :md-done.sync="steps.second" md-description="Edit telephone">
        <md-field :class="messageClass">
          <label>Type phone</label>
          <md-input v-model="users[0].phone" required maxlength="35"></md-input>
          <span class="md-error">There is an error</span>
        </md-field>
        <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
      </md-step>

      <md-step id="third" md-label="Third Step" :md-error="steps.thirdStepError" :md-done.sync="steps.third" md-description="Edit email">
        <md-field :class="messageClass">
          <label>Type email</label>
          <md-input v-model="users[0].email" required maxlength="35"></md-input>
          <span class="md-error">There is an error</span>
        </md-field>
        <md-button class="md-raised md-primary" @click="setDone('third', 'fourth')">Done</md-button>
      </md-step>

      <md-step id="fourth" md-label="Fourth Step" :md-error="steps.fourthStepError" :md-done.sync="steps.fourth" md-description="You can change photo">
        <md-field>
          <label>Upload photo from url</label>
          <md-input v-model="users[0].picture.thumbnail" />
        </md-field>
        <md-button class="md-raised md-primary" @click="setDone('fourth')">Done</md-button>

        <md-list class="md-triple-line">
          <span>Example</span>
          <md-list-item v-for="image in images">
            <md-avatar>
              <img :src="image.url" alt="People">
            </md-avatar>
            <div class="md-list-item-text">
              <p>{{image.url}}</p>
            </div>
            <md-button @click="setImgUrl(image.url)" class="md-icon-button md-list-action">
              <md-icon class="md-primary">star</md-icon>
            </md-button>
          </md-list-item>
        </md-list>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
  export default {
    name: 'StepperLinear',
    props: {
      users: {
        required: true,
        type: Array
      }
    },
    data: () => ({
      steps: {
        active: 'first',
        first: false,
        second: false,
        third: false,
        fourth: false,
        firstStepError: null,
        secondStepError: null,
        thirdStepError: null,
        fourthStepError: null
      },
      errors: {
        noError: null,
        required: null,
        textarea: null,
        hasMessages: false
      },
      images: [
        {url:'https://placeimg.com/40/40/people/1'},
        {url:'https://placeimg.com/40/40/people/2'},
        {url:'https://placeimg.com/40/40/people/3'}
      ],
      photoUrl: ''
    }),
    methods: {
      setDone (id, index) {
        this.steps[id] = true

        let validEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        let valiePhone = /^\d[\d\(\)\ -]{4,14}\d$/;


        if (!this.users[0].name) return this.steps.firstStepError = 'Input user name'
        if (!this.users[0].phone) return this.steps.secondStepError = 'Input user phone'
        if (!this.users[0].email) return this.steps.thirdStepError = 'Input user email'
        if (!this.users[0].picture.thumbnail) return this.steps.fourthStepError = 'Paste url'

        this.steps.firstStepError = null
        this.steps.secondStepError = null
        this.steps.thirdStepError = null
        this.steps.fourthStepError = null

        this.steps.active = index
      },
      setImgUrl(url) {
        this.users[0].picture.thumbnail = url
      },
      insertUser(img) {
        localStorage.setItem()
      }
    },
    computed: {
      messageClass () {
        return {
          'md-invalid': this.errors.hasMessages
        }
      }
    }
  }
</script>

<style lang="scss">
  .md-stepper-content {
    display: flex;
    align-items: center;
    button {
      margin-left: 30px;
    }
  }
  .md-list-item-content {
    min-height: auto !important;
  }
</style>