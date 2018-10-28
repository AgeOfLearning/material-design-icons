import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundConfirmationNumberElement
 * @class IconRoundConfirmationNumberElement
 * @extends {AoflElement}
 */
class IconRoundConfirmationNumberElement extends AoflElement {
  /**
   * Creates an instance of IconRoundConfirmationNumberElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-confirmation-number';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundConfirmationNumberElement.is, IconRoundConfirmationNumberElement);

export default IconRoundConfirmationNumberElement;
