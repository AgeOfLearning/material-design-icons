import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMoneyElement
 * @class IconOutlineMoneyElement
 * @extends {AoflElement}
 */
class IconOutlineMoneyElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMoneyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-money';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMoneyElement.is, IconOutlineMoneyElement);

export default IconOutlineMoneyElement;
