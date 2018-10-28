import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAttachMoneyElement
 * @class IconSharpAttachMoneyElement
 * @extends {AoflElement}
 */
class IconSharpAttachMoneyElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAttachMoneyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-attach-money';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAttachMoneyElement.is, IconSharpAttachMoneyElement);

export default IconSharpAttachMoneyElement;
