import { h, defineComponent, withDirectives, resolveDirective } from 'vue';

/** 封装@vueuse/motion动画库中的自定义指令v-motion */
export default defineComponent({
  name: 'Motion',
  props: {
    delay: {
      type: Number,
      default: 50,
    },
  },
  render() {
    const { delay } = this;
    const motion = resolveDirective('motion');
    const defaultSlot = this.$slots.default;
    if (!defaultSlot) {
      throw new Error('Default slot is not defined');
    }
    return withDirectives(
      h(
        'div',
        {},
        {
          default: () => [defaultSlot()],
        },
      ),
      [
        [
          motion,
          {
            initial: { opacity: 0, y: 100 },
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                delay,
              },
            },
          },
        ],
      ],
    );
  },
});
