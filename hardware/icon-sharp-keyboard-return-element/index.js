import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpKeyboardReturnElement
 * @class IconSharpKeyboardReturnElement
 * @extends {AoflElement}
 */
class IconSharpKeyboardReturnElement extends AoflElement {
  /**
   * Creates an instance of IconSharpKeyboardReturnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-keyboard-return';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpKeyboardReturnElement.is, IconSharpKeyboardReturnElement);

export default IconSharpKeyboardReturnElement;
