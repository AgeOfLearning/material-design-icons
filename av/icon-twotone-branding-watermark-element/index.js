import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBrandingWatermarkElement
 * @class IconTwotoneBrandingWatermarkElement
 * @extends {AoflElement}
 */
class IconTwotoneBrandingWatermarkElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBrandingWatermarkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-branding-watermark';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBrandingWatermarkElement.is, IconTwotoneBrandingWatermarkElement);

export default IconTwotoneBrandingWatermarkElement;
