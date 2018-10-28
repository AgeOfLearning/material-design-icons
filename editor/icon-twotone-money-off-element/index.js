import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMoneyOffElement
 * @class IconTwotoneMoneyOffElement
 * @extends {AoflElement}
 */
class IconTwotoneMoneyOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMoneyOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-money-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMoneyOffElement.is, IconTwotoneMoneyOffElement);

export default IconTwotoneMoneyOffElement;
