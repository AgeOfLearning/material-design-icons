import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneKeyboardArrowRightElement
 * @class IconTwotoneKeyboardArrowRightElement
 * @extends {AoflElement}
 */
class IconTwotoneKeyboardArrowRightElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneKeyboardArrowRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-keyboard-arrow-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneKeyboardArrowRightElement.is, IconTwotoneKeyboardArrowRightElement);

export default IconTwotoneKeyboardArrowRightElement;
