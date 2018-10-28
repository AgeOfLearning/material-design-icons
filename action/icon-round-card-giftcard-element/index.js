import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCardGiftcardElement
 * @class IconRoundCardGiftcardElement
 * @extends {AoflElement}
 */
class IconRoundCardGiftcardElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCardGiftcardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-card-giftcard';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCardGiftcardElement.is, IconRoundCardGiftcardElement);

export default IconRoundCardGiftcardElement;
