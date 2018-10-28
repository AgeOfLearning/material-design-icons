import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRedeemElement
 * @class IconSharpRedeemElement
 * @extends {AoflElement}
 */
class IconSharpRedeemElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRedeemElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-redeem';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRedeemElement.is, IconSharpRedeemElement);

export default IconSharpRedeemElement;
