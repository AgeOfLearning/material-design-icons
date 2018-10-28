import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRedeemElement
 * @class IconOutlineRedeemElement
 * @extends {AoflElement}
 */
class IconOutlineRedeemElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRedeemElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-redeem';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRedeemElement.is, IconOutlineRedeemElement);

export default IconOutlineRedeemElement;
