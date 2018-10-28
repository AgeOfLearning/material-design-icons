import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineKeyboardArrowDownElement
 * @class IconOutlineKeyboardArrowDownElement
 * @extends {AoflElement}
 */
class IconOutlineKeyboardArrowDownElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineKeyboardArrowDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-keyboard-arrow-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineKeyboardArrowDownElement.is, IconOutlineKeyboardArrowDownElement);

export default IconOutlineKeyboardArrowDownElement;
