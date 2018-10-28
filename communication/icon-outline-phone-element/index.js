import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhoneElement
 * @class IconOutlinePhoneElement
 * @extends {AoflElement}
 */
class IconOutlinePhoneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhoneElement.is, IconOutlinePhoneElement);

export default IconOutlinePhoneElement;
