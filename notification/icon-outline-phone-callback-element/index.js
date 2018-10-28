import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhoneCallbackElement
 * @class IconOutlinePhoneCallbackElement
 * @extends {AoflElement}
 */
class IconOutlinePhoneCallbackElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhoneCallbackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phone-callback';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhoneCallbackElement.is, IconOutlinePhoneCallbackElement);

export default IconOutlinePhoneCallbackElement;
