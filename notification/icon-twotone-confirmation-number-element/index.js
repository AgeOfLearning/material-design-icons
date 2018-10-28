import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneConfirmationNumberElement
 * @class IconTwotoneConfirmationNumberElement
 * @extends {AoflElement}
 */
class IconTwotoneConfirmationNumberElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneConfirmationNumberElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-confirmation-number';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneConfirmationNumberElement.is, IconTwotoneConfirmationNumberElement);

export default IconTwotoneConfirmationNumberElement;
