import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneKeyboardReturnElement
 * @class IconTwotoneKeyboardReturnElement
 * @extends {AoflElement}
 */
class IconTwotoneKeyboardReturnElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneKeyboardReturnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-keyboard-return';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneKeyboardReturnElement.is, IconTwotoneKeyboardReturnElement);

export default IconTwotoneKeyboardReturnElement;
