import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLoyaltyElement
 * @class IconRoundLoyaltyElement
 * @extends {AoflElement}
 */
class IconRoundLoyaltyElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLoyaltyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-loyalty';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLoyaltyElement.is, IconRoundLoyaltyElement);

export default IconRoundLoyaltyElement;
