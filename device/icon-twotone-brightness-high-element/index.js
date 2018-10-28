import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBrightnessHighElement
 * @class IconTwotoneBrightnessHighElement
 * @extends {AoflElement}
 */
class IconTwotoneBrightnessHighElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBrightnessHighElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-brightness-high';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBrightnessHighElement.is, IconTwotoneBrightnessHighElement);

export default IconTwotoneBrightnessHighElement;
