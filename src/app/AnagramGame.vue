<template>
    <div>
        this is anagram file
    </div>
    <div>
    <div>
      <label for="user-name">Username</label>
      <input type="text" name="user-name" id="user-name" v-model="userName"/>
    </div>
    <div>
      <label for="score">Score</label>
      <input type="number" name="score" id="score" v-model="score" />
    </div>
    <button @click="recordScore">Record Score</button>
  </div>
</template>

<style>
div,label{
    padding: 0.3rem;
}
</style>
<script>
  export default {
    name: 'AnagramGame',
    data(){
        return {
            userName: '',
            score: 0 
        }
    },
    methods: { 
        async recordScore(){
            const data = {
            user_name:this.userName,
            score:this.score,
            game:"ANAGRAM"
            };
            const response = (await this.axios.post("/record-score/",data)).data;
            console.log(response);
            this.userName = "";
            this.score = 0;
        }
    },
  }
</script>