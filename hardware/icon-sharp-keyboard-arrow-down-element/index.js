import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpKeyboardArrowDownElement
 * @class IconSharpKeyboardArrowDownElement
 * @extends {AoflElement}
 */
class IconSharpKeyboardArrowDownElement extends AoflElement {
  /**
   * Creates an instance of IconSharpKeyboardArrowDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-keyboard-arrow-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpKeyboardArrowDownElement.is, IconSharpKeyboardArrowDownElement);

export default IconSharpKeyboardArrowDownElement;
