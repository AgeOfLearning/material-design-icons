import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCreditCardElement
 * @class IconOutlineCreditCardElement
 * @extends {AoflElement}
 */
class IconOutlineCreditCardElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCreditCardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-credit-card';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCreditCardElement.is, IconOutlineCreditCardElement);

export default IconOutlineCreditCardElement;
