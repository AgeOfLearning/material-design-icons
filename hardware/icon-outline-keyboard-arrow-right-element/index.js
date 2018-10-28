import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineKeyboardArrowRightElement
 * @class IconOutlineKeyboardArrowRightElement
 * @extends {AoflElement}
 */
class IconOutlineKeyboardArrowRightElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineKeyboardArrowRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-keyboard-arrow-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineKeyboardArrowRightElement.is, IconOutlineKeyboardArrowRightElement);

export default IconOutlineKeyboardArrowRightElement;
