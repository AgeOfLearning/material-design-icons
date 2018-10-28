import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneKeyboardArrowLeftElement
 * @class IconTwotoneKeyboardArrowLeftElement
 * @extends {AoflElement}
 */
class IconTwotoneKeyboardArrowLeftElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneKeyboardArrowLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-keyboard-arrow-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneKeyboardArrowLeftElement.is, IconTwotoneKeyboardArrowLeftElement);

export default IconTwotoneKeyboardArrowLeftElement;
