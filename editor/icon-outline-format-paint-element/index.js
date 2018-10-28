import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatPaintElement
 * @class IconOutlineFormatPaintElement
 * @extends {AoflElement}
 */
class IconOutlineFormatPaintElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatPaintElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-paint';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatPaintElement.is, IconOutlineFormatPaintElement);

export default IconOutlineFormatPaintElement;
