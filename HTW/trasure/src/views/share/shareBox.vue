<template>

<div class = "minibox" >
    <div class = "miniImg">
            <img src = "http://placehold.it/150X150"/>
        </div>
        <label class="content">
        <span class="miniType" v-html="type">
        </span>
        <div class="miniTitle" v-text="name">
        </div>
        <div class="miniWord" v-html="word">
        </div>
        <span class = "miniAuthor" v-html="author">
        </span>
        </label>
        
</div>

<!--
<div class = "minibox"  @click="imgClick">
    <div v-for="list in shardList" :key="list.name">
        <div class="miniTitle" v-text="list.name"></div>
        <div class = "miniAuthor" v-text="list.author"></div>
        <div class="miniType" v-text="list.type"></div>
        <div class = "miniImg">
            <img src = "http://placehold.it/150X150"/>
        </div>
    </div>
</div>
-->
</template>

<script>
export default {
    name: 'shareBox',
    props: {
    name: String,
    author : String,
    type: String,
    word: String,
    shardList: Array
  },
  methods: {
    imgClick() {
      alert(this.name);
    }
  },
}
</script>

<style>
div {
    margin: 0;
}
.minibox  {
    display: flex;
    padding-bottom: 10px;
    height: 190px;
    border-bottom: solid 0.7px;
    align-items: center;
    text-align: left;
    overflow: hidden;
}

.content > .miniTitle:hover{
    text-decoration: underline;
    cursor: pointer;
} 

.miniImg {
    padding-right: 20px;
    width: 150px;
    cursor: pointer;
    overflow: hidden;
}
.miniImg img {
    transform: all 0.25s linear;
}
.miniImg:hover img {
    transform: scale(1.1);
}
.minibox .miniTitle {
    font-weight: bold;
}
.minibox .miniWord {
    display: block;
    width: 600px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.minibox .miniType {
    margin-right: 10px;
}

* {
    color: black;
}

</style>