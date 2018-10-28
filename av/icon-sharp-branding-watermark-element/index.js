import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBrandingWatermarkElement
 * @class IconSharpBrandingWatermarkElement
 * @extends {AoflElement}
 */
class IconSharpBrandingWatermarkElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBrandingWatermarkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-branding-watermark';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBrandingWatermarkElement.is, IconSharpBrandingWatermarkElement);

export default IconSharpBrandingWatermarkElement;
