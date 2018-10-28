import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhoneLockedElement
 * @class IconOutlinePhoneLockedElement
 * @extends {AoflElement}
 */
class IconOutlinePhoneLockedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhoneLockedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phone-locked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhoneLockedElement.is, IconOutlinePhoneLockedElement);

export default IconOutlinePhoneLockedElement;
