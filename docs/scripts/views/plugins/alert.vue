<template>
  <div :class="[$tt('body1'), 'demo--alert']">
    <section class="hero plugin">
      <h2 :class="$tt('headline4')">
        $alert
      </h2>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
      <div class="example">
        <ui-button raised @click="$alert('Hello BalmJS')">Show Alert</ui-button>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="alert" type="plugin"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Alert'
  },
  mixins: [snippets],
  created() {
    this.showCode('alert');
  }
};
</script>


