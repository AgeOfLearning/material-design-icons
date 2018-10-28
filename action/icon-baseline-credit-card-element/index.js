import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCreditCardElement
 * @class IconBaselineCreditCardElement
 * @extends {AoflElement}
 */
class IconBaselineCreditCardElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCreditCardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-credit-card';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCreditCardElement.is, IconBaselineCreditCardElement);

export default IconBaselineCreditCardElement;
