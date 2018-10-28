import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpKeyboardHideElement
 * @class IconSharpKeyboardHideElement
 * @extends {AoflElement}
 */
class IconSharpKeyboardHideElement extends AoflElement {
  /**
   * Creates an instance of IconSharpKeyboardHideElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-keyboard-hide';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpKeyboardHideElement.is, IconSharpKeyboardHideElement);

export default IconSharpKeyboardHideElement;
