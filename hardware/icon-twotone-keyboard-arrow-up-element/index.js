import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneKeyboardArrowUpElement
 * @class IconTwotoneKeyboardArrowUpElement
 * @extends {AoflElement}
 */
class IconTwotoneKeyboardArrowUpElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneKeyboardArrowUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-keyboard-arrow-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneKeyboardArrowUpElement.is, IconTwotoneKeyboardArrowUpElement);

export default IconTwotoneKeyboardArrowUpElement;
