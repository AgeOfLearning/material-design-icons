import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhonelinkEraseElement
 * @class IconTwotonePhonelinkEraseElement
 * @extends {AoflElement}
 */
class IconTwotonePhonelinkEraseElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhonelinkEraseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phonelink-erase';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhonelinkEraseElement.is, IconTwotonePhonelinkEraseElement);

export default IconTwotonePhonelinkEraseElement;
