import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCreditCardElement
 * @class IconTwotoneCreditCardElement
 * @extends {AoflElement}
 */
class IconTwotoneCreditCardElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCreditCardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-credit-card';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCreditCardElement.is, IconTwotoneCreditCardElement);

export default IconTwotoneCreditCardElement;
