import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatLineSpacingElement
 * @class IconTwotoneFormatLineSpacingElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatLineSpacingElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatLineSpacingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-line-spacing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatLineSpacingElement.is, IconTwotoneFormatLineSpacingElement);

export default IconTwotoneFormatLineSpacingElement;
