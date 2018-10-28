import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhoneCallbackElement
 * @class IconTwotonePhoneCallbackElement
 * @extends {AoflElement}
 */
class IconTwotonePhoneCallbackElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhoneCallbackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phone-callback';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhoneCallbackElement.is, IconTwotonePhoneCallbackElement);

export default IconTwotonePhoneCallbackElement;
