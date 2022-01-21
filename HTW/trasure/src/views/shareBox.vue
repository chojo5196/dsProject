<template>
<div class = "minibox"  @click="imgClick">
        <div class = "miniImg">
            <img src = "http://placehold.it/150X150"/>
        </div>
        <label>
        <div class="miniTitle">
            {{name}}
        </div>
        <div class = "miniAuthor">
            {{author}}
        </div>
        <div class="minitype">
            {{type}}
        </div>
        </label>
</div>
</template>

<script>
export default {
    name: 'shareBox',
    props: {
    name: String,
    author : String,
    type: String,
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
    cursor: pointer;
    padding-bottom: 10px;
    height: 190px;
    border-bottom: solid 0.7px;
    align-items: center;
}

.miniImg {
    padding-right: 20px;
}

</style>