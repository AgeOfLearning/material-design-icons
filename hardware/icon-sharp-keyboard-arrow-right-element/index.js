import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpKeyboardArrowRightElement
 * @class IconSharpKeyboardArrowRightElement
 * @extends {AoflElement}
 */
class IconSharpKeyboardArrowRightElement extends AoflElement {
  /**
   * Creates an instance of IconSharpKeyboardArrowRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-keyboard-arrow-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpKeyboardArrowRightElement.is, IconSharpKeyboardArrowRightElement);

export default IconSharpKeyboardArrowRightElement;
