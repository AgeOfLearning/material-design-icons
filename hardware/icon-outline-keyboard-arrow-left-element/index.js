import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineKeyboardArrowLeftElement
 * @class IconOutlineKeyboardArrowLeftElement
 * @extends {AoflElement}
 */
class IconOutlineKeyboardArrowLeftElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineKeyboardArrowLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-keyboard-arrow-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineKeyboardArrowLeftElement.is, IconOutlineKeyboardArrowLeftElement);

export default IconOutlineKeyboardArrowLeftElement;
