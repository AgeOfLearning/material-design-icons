import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneKeyboardCapslockElement
 * @class IconTwotoneKeyboardCapslockElement
 * @extends {AoflElement}
 */
class IconTwotoneKeyboardCapslockElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneKeyboardCapslockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-keyboard-capslock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneKeyboardCapslockElement.is, IconTwotoneKeyboardCapslockElement);

export default IconTwotoneKeyboardCapslockElement;
