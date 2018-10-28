import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineKeyboardBackspaceElement
 * @class IconOutlineKeyboardBackspaceElement
 * @extends {AoflElement}
 */
class IconOutlineKeyboardBackspaceElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineKeyboardBackspaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-keyboard-backspace';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineKeyboardBackspaceElement.is, IconOutlineKeyboardBackspaceElement);

export default IconOutlineKeyboardBackspaceElement;
