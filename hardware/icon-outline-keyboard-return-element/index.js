import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineKeyboardReturnElement
 * @class IconOutlineKeyboardReturnElement
 * @extends {AoflElement}
 */
class IconOutlineKeyboardReturnElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineKeyboardReturnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-keyboard-return';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineKeyboardReturnElement.is, IconOutlineKeyboardReturnElement);

export default IconOutlineKeyboardReturnElement;
