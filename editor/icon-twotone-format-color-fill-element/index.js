import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatColorFillElement
 * @class IconTwotoneFormatColorFillElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatColorFillElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatColorFillElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-color-fill';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatColorFillElement.is, IconTwotoneFormatColorFillElement);

export default IconTwotoneFormatColorFillElement;
