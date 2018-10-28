import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCropDinElement
 * @class IconRoundCropDinElement
 * @extends {AoflElement}
 */
class IconRoundCropDinElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCropDinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-crop-din';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCropDinElement.is, IconRoundCropDinElement);

export default IconRoundCropDinElement;
