import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineConfirmationNumberElement
 * @class IconBaselineConfirmationNumberElement
 * @extends {AoflElement}
 */
class IconBaselineConfirmationNumberElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineConfirmationNumberElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-confirmation-number';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineConfirmationNumberElement.is, IconBaselineConfirmationNumberElement);

export default IconBaselineConfirmationNumberElement;
