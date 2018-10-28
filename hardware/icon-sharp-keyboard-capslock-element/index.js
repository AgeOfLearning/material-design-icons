import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpKeyboardCapslockElement
 * @class IconSharpKeyboardCapslockElement
 * @extends {AoflElement}
 */
class IconSharpKeyboardCapslockElement extends AoflElement {
  /**
   * Creates an instance of IconSharpKeyboardCapslockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-keyboard-capslock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpKeyboardCapslockElement.is, IconSharpKeyboardCapslockElement);

export default IconSharpKeyboardCapslockElement;
