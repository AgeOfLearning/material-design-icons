import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCropLandscapeElement
 * @class IconRoundCropLandscapeElement
 * @extends {AoflElement}
 */
class IconRoundCropLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCropLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-crop-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCropLandscapeElement.is, IconRoundCropLandscapeElement);

export default IconRoundCropLandscapeElement;
