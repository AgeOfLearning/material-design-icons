import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhoneMissedElement
 * @class IconOutlinePhoneMissedElement
 * @extends {AoflElement}
 */
class IconOutlinePhoneMissedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhoneMissedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phone-missed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhoneMissedElement.is, IconOutlinePhoneMissedElement);

export default IconOutlinePhoneMissedElement;
