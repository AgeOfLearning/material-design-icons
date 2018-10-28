import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhotoSizeSelectLargeElement
 * @class IconRoundPhotoSizeSelectLargeElement
 * @extends {AoflElement}
 */
class IconRoundPhotoSizeSelectLargeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhotoSizeSelectLargeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-photo-size-select-large';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhotoSizeSelectLargeElement.is, IconRoundPhotoSizeSelectLargeElement);

export default IconRoundPhotoSizeSelectLargeElement;
