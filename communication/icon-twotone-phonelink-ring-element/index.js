import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhonelinkRingElement
 * @class IconTwotonePhonelinkRingElement
 * @extends {AoflElement}
 */
class IconTwotonePhonelinkRingElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhonelinkRingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phonelink-ring';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhonelinkRingElement.is, IconTwotonePhonelinkRingElement);

export default IconTwotonePhonelinkRingElement;
