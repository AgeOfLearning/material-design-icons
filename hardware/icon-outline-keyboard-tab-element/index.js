import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineKeyboardTabElement
 * @class IconOutlineKeyboardTabElement
 * @extends {AoflElement}
 */
class IconOutlineKeyboardTabElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineKeyboardTabElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-keyboard-tab';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineKeyboardTabElement.is, IconOutlineKeyboardTabElement);

export default IconOutlineKeyboardTabElement;
