<template>
<div class = "minibox">
            <div class = "miniImg"
            @click="imgClick">
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
      console.log(this.author)
    }
  },
}
</script>

<style>
div {
    margin: 0;
}
.minibox {
    display: flex;
    cursor: pointer;
}

.miniImg {
    padding-right: 20px;
}

</style>