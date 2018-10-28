import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundKeyboardBackspaceElement
 * @class IconRoundKeyboardBackspaceElement
 * @extends {AoflElement}
 */
class IconRoundKeyboardBackspaceElement extends AoflElement {
  /**
   * Creates an instance of IconRoundKeyboardBackspaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-keyboard-backspace';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundKeyboardBackspaceElement.is, IconRoundKeyboardBackspaceElement);

export default IconRoundKeyboardBackspaceElement;
