import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-wrapper': ['section-body']
})

export default class SectionBody extends BodyComponent {
  static allowedAttributes = {
    margin: 'px',
    padding: 'px',
    'background-color': 'color',
    width: 'px'
  }

  static defaultAttributes = {
    margin: '0 auto 20px',
    padding: '0 25px 20px',
    'background-color': 'white'
  }

  getStyles () {
    return {
      container: {
        padding: this.getAttribute('padding'),
        'background-color': this.getAttribute('background-color'),
        width: this.getAttribute('width'),
        margin: this.getAttribute('margin'),
        overflow: 'hidden'
      }
    }
  }

  render () {
    return `
      <div ${this.htmlAttributes({ style: 'container' })}>
        ${this.renderChildren()}
      </div>
		`
  }
}