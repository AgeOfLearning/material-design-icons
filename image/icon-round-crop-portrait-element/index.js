import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCropPortraitElement
 * @class IconRoundCropPortraitElement
 * @extends {AoflElement}
 */
class IconRoundCropPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCropPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-crop-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCropPortraitElement.is, IconRoundCropPortraitElement);

export default IconRoundCropPortraitElement;
