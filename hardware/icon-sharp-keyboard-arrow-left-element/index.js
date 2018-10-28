import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpKeyboardArrowLeftElement
 * @class IconSharpKeyboardArrowLeftElement
 * @extends {AoflElement}
 */
class IconSharpKeyboardArrowLeftElement extends AoflElement {
  /**
   * Creates an instance of IconSharpKeyboardArrowLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-keyboard-arrow-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpKeyboardArrowLeftElement.is, IconSharpKeyboardArrowLeftElement);

export default IconSharpKeyboardArrowLeftElement;
