import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMoneyElement
 * @class IconSharpMoneyElement
 * @extends {AoflElement}
 */
class IconSharpMoneyElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMoneyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-money';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMoneyElement.is, IconSharpMoneyElement);

export default IconSharpMoneyElement;
