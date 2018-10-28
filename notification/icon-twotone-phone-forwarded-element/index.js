import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhoneForwardedElement
 * @class IconTwotonePhoneForwardedElement
 * @extends {AoflElement}
 */
class IconTwotonePhoneForwardedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhoneForwardedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phone-forwarded';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhoneForwardedElement.is, IconTwotonePhoneForwardedElement);

export default IconTwotonePhoneForwardedElement;
