<template>
  <div :class="[$tt('body1'), 'demo--validator']">
    <section class="hero plugin">
      <h2 :class="$tt('headline4')">
        $validate
      </h2>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
      <fieldset>
        <legend>Form Area</legend>
        <p class="form-item">
          <ui-textfield id="mobile"
            v-model="formData.mobile"
            helptextId="mobile-helper-text">Mobile</ui-textfield>
          <ui-textfield-helptext id="mobile-helper-text" :visible="errorMsg.mobile">
            {{ errorMsg.mobile }}
          </ui-textfield-helptext>
        </p>
        <p class="form-item">
          <ui-textfield type="password"
            id="password"
            v-model="formData.password"
            helptextId="password-helper-text">Password</ui-textfield>
          <ui-textfield-helptext id="password-helper-text" :visible="errorMsg.password">
            {{ errorMsg.password }}
          </ui-textfield-helptext>
        </p>
        <p class="form-item">
          <ui-textfield type="password"
            id="repassword"
            v-model="formData.repassword"
            helptextId="repassword-helper-text">Repeat Password</ui-textfield>
          <ui-textfield-helptext id="repassword-helper-text" :visible="errorMsg.repassword">
            {{ errorMsg.repassword }}
          </ui-textfield-helptext>
        </p>
        <p class="form-actions">
          <ui-button raised @click="submit">Submit</ui-button>
        </p>
      </fieldset>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="validator" type="plugin"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Validator'
  },
  mixins: [snippets],
  validations: {
    mobile: {
      label: 'Mobile',
      validator: 'required, mobile'
    },
    password: {
      label: 'Password',
      validator: 'required, password, minRule, maxRule',
      minRule: {
        validate(value) {
          return value.trim().length >= 6;
        },
        message: '%s minLength >= 6'
      },
      maxRule: {
        validate(value) {
          return value.trim().length <= 8;
        },
        message: '%s maxLength <= 8'
      }
    },
    repassword: {
      label: 'Repeat Password',
      validator: 'required, password, repasswordRule',
      repasswordRule: {
        validate(value, data) {
          return value === data.password;
        },
        message: 'repassword !== password'
      }
    }
  },
  data() {
    return {
      formData: {
        mobile: '',
        password: '',
        repassword: ''
      },
      errorMsg: {}
    };
  },
  created() {
    this.showCode('validator');
  },
  methods: {
    submit() {
      let result = this.$validate(this.formData);
      let { isValid, errorMsg } = result;
      this.errorMsg = errorMsg;

      console.log(result);

      if (isValid) {
        console.log('gg');
        this.$toast('gg');
      }
    }
  }
};
</script>
