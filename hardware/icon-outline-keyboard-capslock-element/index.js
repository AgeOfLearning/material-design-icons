import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineKeyboardCapslockElement
 * @class IconOutlineKeyboardCapslockElement
 * @extends {AoflElement}
 */
class IconOutlineKeyboardCapslockElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineKeyboardCapslockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-keyboard-capslock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineKeyboardCapslockElement.is, IconOutlineKeyboardCapslockElement);

export default IconOutlineKeyboardCapslockElement;
