<template>
  <div>
    <md-steppers :md-active-step.sync="steps.active" md-linear>
      <md-step id="first" md-label="First Step" :md-error="steps.firstStepError" md-description="Edit name" :md-done.sync="steps.first">
        <md-field :class="messageClass">
          <label>Type name</label>
          <md-input required maxlength="35" v-model="users[0].name"></md-input>
          <span class="md-error">There is an error</span>
        </md-field>
        <md-button class="md-raised md-primary" @click="setDone('first', 'second', checkFirst())">Continue</md-button>
      </md-step>

      <md-step id="second" md-label="Second Step" :md-error="steps.secondStepError" :md-done.sync="steps.second" md-description="Edit telephone">
        <md-field :class="messageClass">
          <label>Type phone</label>
          <md-input v-model="users[0].phone" required maxlength="35"></md-input>
          <span class="md-error">There is an error</span>
        </md-field>
        <md-button class="md-raised md-primary" @click="setDone('second', 'third', checkSecond())">Continue</md-button>
      </md-step>

      <md-step id="third" md-label="Third Step" :md-error="steps.thirdStepError" :md-done.sync="steps.third" md-description="Edit email">
        <md-field :class="messageClass">
          <label>Type email</label>
          <md-input v-model="users[0].email" required maxlength="35"></md-input>
          <span class="md-error" style="translate3d(0,0,0); opacity: 1">Should be format 'name@email.com'</span>
        </md-field>
        <md-button class="md-raised md-primary" @click="setDone('third', 'fourth', checkThird())">Done</md-button>
      </md-step>

      <md-step id="fourth" md-label="Fourth Step" :md-error="steps.fourthStepError" :md-done.sync="steps.fourth" md-description="You can change photo">
        <md-field>
          <label>Upload photo from url</label>
          <md-input v-model="users[0].picture.thumbnail" />
        </md-field>
        <md-button class="md-raised md-primary" @click="sendNewUser()">
          <router-link to="/" style="color:white">EXIT</router-link>
        </md-button>

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
      setDone (id, index, pass) {
        this.steps[id] = true

        this.checkFourth()
        if (pass) this.steps.active = index
      },
      setImgUrl(url) {
        this.users[0].picture.thumbnail = url
      },
      checkFirst() {
        if (!this.users[0].name) {
          this.steps.firstStepError = 'Input user name'
          return
        }
        this.steps.firstStepError = null
        return true
      },
      checkSecond() {
        let validPhone = /^\d[\d\(\)\ -]{1,14}\d$/;

        if ( !this.users[0].phone) {
          this.steps.secondStepError = 'Input user phone'
          return
        }

        this.steps.secondStepError = null
        return true
      },
      checkThird() {
        let validEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

        if (validEmail.test(this.users[0].email) == false) {
          this.steps.thirdStepError = 'Input user email'
          return
        }

        this.steps.thirdStepError = null
        return true
      },
      checkFourth() {
        if (!this.users[0].picture.thumbnail) {
          this.steps.fourthStepError = 'Paste url'
          return
        }

        this.steps.fourthStepError = null
        return true
      },
      sendNewUser() {
        let localUsers = JSON.parse(localStorage.getItem('data'))
        let routeItem = this.$route.params.id

        localUsers.splice(routeItem-1, 1)
        localUsers.unshift(this.users[0])

        localStorage.setItem('data', JSON.stringify(localUsers))
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