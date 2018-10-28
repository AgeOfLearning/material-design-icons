import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineKeyboardElement
 * @class IconOutlineKeyboardElement
 * @extends {AoflElement}
 */
class IconOutlineKeyboardElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineKeyboardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-keyboard';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineKeyboardElement.is, IconOutlineKeyboardElement);

export default IconOutlineKeyboardElement;
