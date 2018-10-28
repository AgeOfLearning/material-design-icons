import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhotoSizeSelectActualElement
 * @class IconRoundPhotoSizeSelectActualElement
 * @extends {AoflElement}
 */
class IconRoundPhotoSizeSelectActualElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhotoSizeSelectActualElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-photo-size-select-actual';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhotoSizeSelectActualElement.is, IconRoundPhotoSizeSelectActualElement);

export default IconRoundPhotoSizeSelectActualElement;
