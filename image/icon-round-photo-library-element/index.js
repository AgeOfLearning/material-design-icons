import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhotoLibraryElement
 * @class IconRoundPhotoLibraryElement
 * @extends {AoflElement}
 */
class IconRoundPhotoLibraryElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhotoLibraryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-photo-library';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhotoLibraryElement.is, IconRoundPhotoLibraryElement);

export default IconRoundPhotoLibraryElement;
