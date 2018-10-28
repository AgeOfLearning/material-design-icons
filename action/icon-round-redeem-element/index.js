import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRedeemElement
 * @class IconRoundRedeemElement
 * @extends {AoflElement}
 */
class IconRoundRedeemElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRedeemElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-redeem';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRedeemElement.is, IconRoundRedeemElement);

export default IconRoundRedeemElement;
