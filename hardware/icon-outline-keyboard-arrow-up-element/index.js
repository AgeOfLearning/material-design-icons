import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineKeyboardArrowUpElement
 * @class IconOutlineKeyboardArrowUpElement
 * @extends {AoflElement}
 */
class IconOutlineKeyboardArrowUpElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineKeyboardArrowUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-keyboard-arrow-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineKeyboardArrowUpElement.is, IconOutlineKeyboardArrowUpElement);

export default IconOutlineKeyboardArrowUpElement;
