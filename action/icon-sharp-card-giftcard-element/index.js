import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCardGiftcardElement
 * @class IconSharpCardGiftcardElement
 * @extends {AoflElement}
 */
class IconSharpCardGiftcardElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCardGiftcardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-card-giftcard';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCardGiftcardElement.is, IconSharpCardGiftcardElement);

export default IconSharpCardGiftcardElement;
