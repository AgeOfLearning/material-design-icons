import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBrandingWatermarkElement
 * @class IconRoundBrandingWatermarkElement
 * @extends {AoflElement}
 */
class IconRoundBrandingWatermarkElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBrandingWatermarkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-branding-watermark';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBrandingWatermarkElement.is, IconRoundBrandingWatermarkElement);

export default IconRoundBrandingWatermarkElement;
