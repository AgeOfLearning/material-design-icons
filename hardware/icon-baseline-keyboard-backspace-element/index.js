import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineKeyboardBackspaceElement
 * @class IconBaselineKeyboardBackspaceElement
 * @extends {AoflElement}
 */
class IconBaselineKeyboardBackspaceElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineKeyboardBackspaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-keyboard-backspace';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineKeyboardBackspaceElement.is, IconBaselineKeyboardBackspaceElement);

export default IconBaselineKeyboardBackspaceElement;
