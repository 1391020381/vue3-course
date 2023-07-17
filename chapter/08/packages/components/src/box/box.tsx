import { defineComponent } from 'vue';
import { prefixName } from '../theme/index';

export const Box = defineComponent({
  props: {
    class: String
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div aaa="1111" class={`${prefixName}-box ${props.class || ''}`}>
          {slots?.default?.()}
        </div>
      );
    };
  }
});
