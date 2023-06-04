export { default as Alur } from '../..\\components\\Alur.vue'
export { default as Benefit } from '../..\\components\\Benefit.vue'
export { default as Conclusion } from '../..\\components\\Conclusion.vue'
export { default as ConclusionMobile } from '../..\\components\\ConclusionMobile.vue'
export { default as Faq } from '../..\\components\\Faq.vue'
export { default as Feature } from '../..\\components\\Feature.vue'
export { default as FeatureMobile } from '../..\\components\\FeatureMobile.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Home } from '../..\\components\\Home.vue'
export { default as NavBar } from '../..\\components\\NavBar.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Recommend } from '../..\\components\\Recommend.vue'
export { default as Service } from '../..\\components\\Service.vue'
export { default as Testimoni } from '../..\\components\\Testimoni.vue'
export { default as ToConclusion } from '../..\\components\\ToConclusion.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
