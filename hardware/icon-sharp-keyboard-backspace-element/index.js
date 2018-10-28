import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpKeyboardBackspaceElement
 * @class IconSharpKeyboardBackspaceElement
 * @extends {AoflElement}
 */
class IconSharpKeyboardBackspaceElement extends AoflElement {
  /**
   * Creates an instance of IconSharpKeyboardBackspaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-keyboard-backspace';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpKeyboardBackspaceElement.is, IconSharpKeyboardBackspaceElement);

export default IconSharpKeyboardBackspaceElement;
