import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMoneyElement
 * @class IconTwotoneMoneyElement
 * @extends {AoflElement}
 */
class IconTwotoneMoneyElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMoneyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-money';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMoneyElement.is, IconTwotoneMoneyElement);

export default IconTwotoneMoneyElement;
