import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCropOriginalElement
 * @class IconRoundCropOriginalElement
 * @extends {AoflElement}
 */
class IconRoundCropOriginalElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCropOriginalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-crop-original';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCropOriginalElement.is, IconRoundCropOriginalElement);

export default IconRoundCropOriginalElement;
