<template>
<div>
    <p>{{sendContent}}</p>
</div>
</template>

<script>

export default {
    computed: {
    sendContent: function(){
    return this.$store.state.textContent
    },
  },
}
</script>