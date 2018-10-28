import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpKeyboardTabElement
 * @class IconSharpKeyboardTabElement
 * @extends {AoflElement}
 */
class IconSharpKeyboardTabElement extends AoflElement {
  /**
   * Creates an instance of IconSharpKeyboardTabElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-keyboard-tab';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpKeyboardTabElement.is, IconSharpKeyboardTabElement);

export default IconSharpKeyboardTabElement;
