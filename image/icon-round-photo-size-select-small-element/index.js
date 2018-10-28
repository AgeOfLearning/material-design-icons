import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhotoSizeSelectSmallElement
 * @class IconRoundPhotoSizeSelectSmallElement
 * @extends {AoflElement}
 */
class IconRoundPhotoSizeSelectSmallElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhotoSizeSelectSmallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-photo-size-select-small';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhotoSizeSelectSmallElement.is, IconRoundPhotoSizeSelectSmallElement);

export default IconRoundPhotoSizeSelectSmallElement;
