<template>
  <div :class="[$tt('body1'), 'demo--button']">
    <section class="hero component">
      <ui-button :disabled="disabled">Flat</ui-button>
      <ui-button raised :disabled="disabled">Raised</ui-button>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
      <section class="demo-wrapper">
        <ui-checkbox id="toggle-disabled"
          v-model="disabled">
          Disabled buttons (excluding links)
        </ui-checkbox>

        <h4 :class="$tt('headline4')">1.1 Ripple Enabled</h4>
        <ui-button-demo :disabled="disabled" :code="demoCode"></ui-button-demo>

        <h4 :class="$tt('headline4')">1.2 CSS Only</h4>
        <ui-button-demo cssOnly :disabled="disabled"></ui-button-demo>
      </section>

      <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="button"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import UiButtonDemo from '../../components/button';

export default {
  metaInfo: {
    titleTemplate: '%s - Button'
  },
  components: {
    UiButtonDemo
  },
  mixins: [snippets],
  data() {
    return {
      disabled: false
    };
  },
  computed: {
    demoCode() {
      return this.code;
    }
  },
  created() {
    this.showCode('button', 6);
  }
};
</script>
