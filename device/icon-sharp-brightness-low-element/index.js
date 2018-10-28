import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBrightnessLowElement
 * @class IconSharpBrightnessLowElement
 * @extends {AoflElement}
 */
class IconSharpBrightnessLowElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBrightnessLowElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-brightness-low';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBrightnessLowElement.is, IconSharpBrightnessLowElement);

export default IconSharpBrightnessLowElement;
