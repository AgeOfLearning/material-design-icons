import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhoneForwardedElement
 * @class IconOutlinePhoneForwardedElement
 * @extends {AoflElement}
 */
class IconOutlinePhoneForwardedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhoneForwardedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phone-forwarded';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhoneForwardedElement.is, IconOutlinePhoneForwardedElement);

export default IconOutlinePhoneForwardedElement;
