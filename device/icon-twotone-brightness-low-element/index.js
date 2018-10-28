import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBrightnessLowElement
 * @class IconTwotoneBrightnessLowElement
 * @extends {AoflElement}
 */
class IconTwotoneBrightnessLowElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBrightnessLowElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-brightness-low';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBrightnessLowElement.is, IconTwotoneBrightnessLowElement);

export default IconTwotoneBrightnessLowElement;
