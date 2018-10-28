import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBrightness2Element
 * @class IconTwotoneBrightness2Element
 * @extends {AoflElement}
 */
class IconTwotoneBrightness2Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBrightness2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-brightness-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBrightness2Element.is, IconTwotoneBrightness2Element);

export default IconTwotoneBrightness2Element;
