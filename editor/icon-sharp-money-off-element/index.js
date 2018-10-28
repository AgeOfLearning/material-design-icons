import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMoneyOffElement
 * @class IconSharpMoneyOffElement
 * @extends {AoflElement}
 */
class IconSharpMoneyOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMoneyOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-money-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMoneyOffElement.is, IconSharpMoneyOffElement);

export default IconSharpMoneyOffElement;
