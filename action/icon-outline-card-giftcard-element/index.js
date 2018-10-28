import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCardGiftcardElement
 * @class IconOutlineCardGiftcardElement
 * @extends {AoflElement}
 */
class IconOutlineCardGiftcardElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCardGiftcardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-card-giftcard';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCardGiftcardElement.is, IconOutlineCardGiftcardElement);

export default IconOutlineCardGiftcardElement;
