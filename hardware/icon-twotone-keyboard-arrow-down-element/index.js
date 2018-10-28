import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneKeyboardArrowDownElement
 * @class IconTwotoneKeyboardArrowDownElement
 * @extends {AoflElement}
 */
class IconTwotoneKeyboardArrowDownElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneKeyboardArrowDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-keyboard-arrow-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneKeyboardArrowDownElement.is, IconTwotoneKeyboardArrowDownElement);

export default IconTwotoneKeyboardArrowDownElement;
