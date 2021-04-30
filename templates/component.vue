<template>
  <div class="<?=rootCls?>">
    <?=name?>
    component working;
  </div>
</template>

<script lang="ts">
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator';

@Component({
    components: {}
})
export default class <?=name?> extends Vue {
    
}
</script>

<style lang="scss" scoped>
.<?=rootCls? > {
}
</style>

