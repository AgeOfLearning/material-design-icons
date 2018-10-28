import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBrightnessAutoElement
 * @class IconTwotoneBrightnessAutoElement
 * @extends {AoflElement}
 */
class IconTwotoneBrightnessAutoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBrightnessAutoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-brightness-auto';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBrightnessAutoElement.is, IconTwotoneBrightnessAutoElement);

export default IconTwotoneBrightnessAutoElement;
