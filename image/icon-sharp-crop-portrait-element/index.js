import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCropPortraitElement
 * @class IconSharpCropPortraitElement
 * @extends {AoflElement}
 */
class IconSharpCropPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCropPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-crop-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCropPortraitElement.is, IconSharpCropPortraitElement);

export default IconSharpCropPortraitElement;
