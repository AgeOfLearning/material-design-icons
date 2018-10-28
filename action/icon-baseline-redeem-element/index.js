import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRedeemElement
 * @class IconBaselineRedeemElement
 * @extends {AoflElement}
 */
class IconBaselineRedeemElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRedeemElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-redeem';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRedeemElement.is, IconBaselineRedeemElement);

export default IconBaselineRedeemElement;
