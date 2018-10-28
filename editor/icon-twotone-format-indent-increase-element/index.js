import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatIndentIncreaseElement
 * @class IconTwotoneFormatIndentIncreaseElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatIndentIncreaseElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatIndentIncreaseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-indent-increase';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatIndentIncreaseElement.is, IconTwotoneFormatIndentIncreaseElement);

export default IconTwotoneFormatIndentIncreaseElement;
