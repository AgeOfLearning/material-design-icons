import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineKeyboardHideElement
 * @class IconOutlineKeyboardHideElement
 * @extends {AoflElement}
 */
class IconOutlineKeyboardHideElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineKeyboardHideElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-keyboard-hide';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineKeyboardHideElement.is, IconOutlineKeyboardHideElement);

export default IconOutlineKeyboardHideElement;
