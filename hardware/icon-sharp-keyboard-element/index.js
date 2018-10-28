import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpKeyboardElement
 * @class IconSharpKeyboardElement
 * @extends {AoflElement}
 */
class IconSharpKeyboardElement extends AoflElement {
  /**
   * Creates an instance of IconSharpKeyboardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-keyboard';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpKeyboardElement.is, IconSharpKeyboardElement);

export default IconSharpKeyboardElement;
