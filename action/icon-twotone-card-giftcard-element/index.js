import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCardGiftcardElement
 * @class IconTwotoneCardGiftcardElement
 * @extends {AoflElement}
 */
class IconTwotoneCardGiftcardElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCardGiftcardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-card-giftcard';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCardGiftcardElement.is, IconTwotoneCardGiftcardElement);

export default IconTwotoneCardGiftcardElement;
