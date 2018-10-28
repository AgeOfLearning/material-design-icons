import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCropFreeElement
 * @class IconRoundCropFreeElement
 * @extends {AoflElement}
 */
class IconRoundCropFreeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCropFreeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-crop-free';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCropFreeElement.is, IconRoundCropFreeElement);

export default IconRoundCropFreeElement;
