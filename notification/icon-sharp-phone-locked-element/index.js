import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhoneLockedElement
 * @class IconSharpPhoneLockedElement
 * @extends {AoflElement}
 */
class IconSharpPhoneLockedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhoneLockedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-phone-locked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhoneLockedElement.is, IconSharpPhoneLockedElement);

export default IconSharpPhoneLockedElement;
