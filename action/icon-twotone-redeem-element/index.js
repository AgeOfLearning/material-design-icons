import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRedeemElement
 * @class IconTwotoneRedeemElement
 * @extends {AoflElement}
 */
class IconTwotoneRedeemElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRedeemElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-redeem';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRedeemElement.is, IconTwotoneRedeemElement);

export default IconTwotoneRedeemElement;
