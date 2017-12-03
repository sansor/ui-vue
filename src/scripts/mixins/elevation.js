const Z_SPACE_MIN = 0;
const Z_SPACE_MAX = 24;

export default {
  props: {
    // ui attributes
    z: {
      type: [Number, String],
      default: Z_SPACE_MIN
    },
    zTransition: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    zSpaceValue() {
      return this.zSpace(+this.z, this.zTransition);
    }
  },
  methods: {
    zSpace(z = 0, zTransition = false) {
      let N = z;
      let result = zTransition ? ['mdc-elevation-transition'] : [];
      if (N >= Z_SPACE_MIN && N <= Z_SPACE_MAX) {
        result.push(`mdc-elevation--z${N}`);
      }
      return result.join(' ');
    }
  }
};
