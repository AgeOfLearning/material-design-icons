import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhoneLockedElement
 * @class IconTwotonePhoneLockedElement
 * @extends {AoflElement}
 */
class IconTwotonePhoneLockedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhoneLockedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phone-locked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhoneLockedElement.is, IconTwotonePhoneLockedElement);

export default IconTwotonePhoneLockedElement;
