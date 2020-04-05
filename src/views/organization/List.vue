<template>
  <div>
    <h2>{{ fullname }}</h2>
    <label for="">Full Name</label>
    <input type="text" v-model="fullname"><br/>
    <hr>
    <div v-bind:id="idDiv" v-html="variavelHtml"></div>
    <div v-bind:[idDiv]="variavelHtml">{{ variavelHtml}}</div>
    <h3>{{ reversedMessage }} </h3>
    <label for="">Variavel</label>
    <input type="text"
      v-model="variavelHtml"
      @keyup.left="moveLeft"
      @keyup.right="moveRight"
      @keyup.down.once="moveDown"
      @keyup.up.once="moveUp"
      ><br/>
    <label for="">idDiv</label>
    <input type="text" v-model="idDiv"><br/>
    <h3>{{ now }} </h3>
    <hr>
    <button @click="moveDivUp">UP</button>
    <div :style="[classStyle, styleOb, {top:classStyle.top}]"> {{ variavelHtml }}</div>

    <div v-if="Math.random() > 0.5">
      Now you see me
    </div>
    <div v-else>
      Now you don't
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      variavelHtml: '',
      idDiv: '',
      firstName: '',
      lastName: 'aaa',
      classStyle: {
        position: 'aboslute',
        top: 0,
        left: 0,
        width: '200px;',
        height: '200px',
        background: 'gray'
      },
      styleOb: {
        width: '200px',
        position: 'absolute',
        display: 'block'
      }
    }
  },
  methods: {
    moveLeft () {
      console.log('<=')
    },
    moveRight () {
      console.log('=>')
    },
    moveDown () {
      console.log('\\/')
    },
    moveUp () {
      console.log('/\\')
    },
    moveDivUp () {
      // console.log(this.classStyle.top)
      this.classStyle.top -= 5
    }
  },
  computed: {
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.variavelHtml.split('').reverse().join('')
    },
    now: function () {
      return Date.now()
    },
    fullname: {
      get: function () {
        return `${this.firstName} ${this.lastName}`
      },
      set: function (Newname) {
        var names = Newname.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.lenght - 1]
      }
    }
  },
  mounted: function () {
    console.log('Mounted: ' + this.classStyle.top)
  },
  beforeUpdate: function () {
    console.log('Antes de atualizar: ' + this.classStyle.top)
  },
  updated: function () {
    console.log('Antes de atualizar: ' + this.classStyle.top)
  }

}
</script>

<style scoped>
input{
  margin: 0px 5px 5px 5px;
  padding: 10px;
  border-color: #42B983;
  border-width: 1px 5px 5px 5px;
  border-style: solid;
  background-color: rgb(225, 251, 240);
  color: #42B983;
}
label{
  color: white;
  display: block;
  margin:5px 5px  0px 5px;
  width: 207px;
  background:#42B983;
  padding:10px 5px 5px 10px;
  border-radius: 15px 15px 0px 0px;
}

</style>
