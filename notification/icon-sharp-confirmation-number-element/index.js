import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpConfirmationNumberElement
 * @class IconSharpConfirmationNumberElement
 * @extends {AoflElement}
 */
class IconSharpConfirmationNumberElement extends AoflElement {
  /**
   * Creates an instance of IconSharpConfirmationNumberElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-confirmation-number';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpConfirmationNumberElement.is, IconSharpConfirmationNumberElement);

export default IconSharpConfirmationNumberElement;
