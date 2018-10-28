import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneKeyboardBackspaceElement
 * @class IconTwotoneKeyboardBackspaceElement
 * @extends {AoflElement}
 */
class IconTwotoneKeyboardBackspaceElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneKeyboardBackspaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-keyboard-backspace';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneKeyboardBackspaceElement.is, IconTwotoneKeyboardBackspaceElement);

export default IconTwotoneKeyboardBackspaceElement;
