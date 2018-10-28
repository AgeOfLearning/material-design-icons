import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAlternateEmailElement
 * @class IconRoundAlternateEmailElement
 * @extends {AoflElement}
 */
class IconRoundAlternateEmailElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAlternateEmailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-alternate-email';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAlternateEmailElement.is, IconRoundAlternateEmailElement);

export default IconRoundAlternateEmailElement;
