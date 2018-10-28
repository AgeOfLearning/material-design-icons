import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatIndentDecreaseElement
 * @class IconTwotoneFormatIndentDecreaseElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatIndentDecreaseElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatIndentDecreaseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-indent-decrease';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatIndentDecreaseElement.is, IconTwotoneFormatIndentDecreaseElement);

export default IconTwotoneFormatIndentDecreaseElement;
