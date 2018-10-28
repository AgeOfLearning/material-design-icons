import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBrandingWatermarkElement
 * @class IconBaselineBrandingWatermarkElement
 * @extends {AoflElement}
 */
class IconBaselineBrandingWatermarkElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBrandingWatermarkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-branding-watermark';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBrandingWatermarkElement.is, IconBaselineBrandingWatermarkElement);

export default IconBaselineBrandingWatermarkElement;
