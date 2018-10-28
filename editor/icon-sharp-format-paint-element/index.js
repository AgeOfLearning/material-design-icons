import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatPaintElement
 * @class IconSharpFormatPaintElement
 * @extends {AoflElement}
 */
class IconSharpFormatPaintElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatPaintElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-paint';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatPaintElement.is, IconSharpFormatPaintElement);

export default IconSharpFormatPaintElement;
