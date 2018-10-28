import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCropLandscapeElement
 * @class IconSharpCropLandscapeElement
 * @extends {AoflElement}
 */
class IconSharpCropLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCropLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-crop-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCropLandscapeElement.is, IconSharpCropLandscapeElement);

export default IconSharpCropLandscapeElement;
