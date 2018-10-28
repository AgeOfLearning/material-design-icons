import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatPaintElement
 * @class IconTwotoneFormatPaintElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatPaintElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatPaintElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-paint';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatPaintElement.is, IconTwotoneFormatPaintElement);

export default IconTwotoneFormatPaintElement;
