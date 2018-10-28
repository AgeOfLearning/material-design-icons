import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLoyaltyElement
 * @class IconSharpLoyaltyElement
 * @extends {AoflElement}
 */
class IconSharpLoyaltyElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLoyaltyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-loyalty';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLoyaltyElement.is, IconSharpLoyaltyElement);

export default IconSharpLoyaltyElement;
