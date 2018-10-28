import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneKeyboardHideElement
 * @class IconTwotoneKeyboardHideElement
 * @extends {AoflElement}
 */
class IconTwotoneKeyboardHideElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneKeyboardHideElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-keyboard-hide';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneKeyboardHideElement.is, IconTwotoneKeyboardHideElement);

export default IconTwotoneKeyboardHideElement;
