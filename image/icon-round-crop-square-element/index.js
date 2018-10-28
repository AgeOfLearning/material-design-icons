import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCropSquareElement
 * @class IconRoundCropSquareElement
 * @extends {AoflElement}
 */
class IconRoundCropSquareElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCropSquareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-crop-square';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCropSquareElement.is, IconRoundCropSquareElement);

export default IconRoundCropSquareElement;
