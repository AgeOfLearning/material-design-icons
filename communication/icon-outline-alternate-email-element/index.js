import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAlternateEmailElement
 * @class IconOutlineAlternateEmailElement
 * @extends {AoflElement}
 */
class IconOutlineAlternateEmailElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAlternateEmailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-alternate-email';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAlternateEmailElement.is, IconOutlineAlternateEmailElement);

export default IconOutlineAlternateEmailElement;
