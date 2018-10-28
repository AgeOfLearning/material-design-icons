import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpKeyboardArrowUpElement
 * @class IconSharpKeyboardArrowUpElement
 * @extends {AoflElement}
 */
class IconSharpKeyboardArrowUpElement extends AoflElement {
  /**
   * Creates an instance of IconSharpKeyboardArrowUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-keyboard-arrow-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpKeyboardArrowUpElement.is, IconSharpKeyboardArrowUpElement);

export default IconSharpKeyboardArrowUpElement;
