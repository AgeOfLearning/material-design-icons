import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatAlignRightElement
 * @class IconTwotoneFormatAlignRightElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatAlignRightElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatAlignRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-align-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatAlignRightElement.is, IconTwotoneFormatAlignRightElement);

export default IconTwotoneFormatAlignRightElement;
