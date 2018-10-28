import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineConfirmationNumberElement
 * @class IconOutlineConfirmationNumberElement
 * @extends {AoflElement}
 */
class IconOutlineConfirmationNumberElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineConfirmationNumberElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-confirmation-number';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineConfirmationNumberElement.is, IconOutlineConfirmationNumberElement);

export default IconOutlineConfirmationNumberElement;
