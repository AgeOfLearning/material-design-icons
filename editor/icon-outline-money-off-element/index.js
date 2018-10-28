import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMoneyOffElement
 * @class IconOutlineMoneyOffElement
 * @extends {AoflElement}
 */
class IconOutlineMoneyOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMoneyOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-money-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMoneyOffElement.is, IconOutlineMoneyOffElement);

export default IconOutlineMoneyOffElement;
