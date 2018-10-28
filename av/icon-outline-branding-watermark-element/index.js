import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBrandingWatermarkElement
 * @class IconOutlineBrandingWatermarkElement
 * @extends {AoflElement}
 */
class IconOutlineBrandingWatermarkElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBrandingWatermarkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-branding-watermark';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBrandingWatermarkElement.is, IconOutlineBrandingWatermarkElement);

export default IconOutlineBrandingWatermarkElement;
