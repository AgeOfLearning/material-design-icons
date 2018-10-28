import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCardGiftcardElement
 * @class IconBaselineCardGiftcardElement
 * @extends {AoflElement}
 */
class IconBaselineCardGiftcardElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCardGiftcardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-card-giftcard';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCardGiftcardElement.is, IconBaselineCardGiftcardElement);

export default IconBaselineCardGiftcardElement;
