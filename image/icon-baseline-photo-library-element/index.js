import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhotoLibraryElement
 * @class IconBaselinePhotoLibraryElement
 * @extends {AoflElement}
 */
class IconBaselinePhotoLibraryElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhotoLibraryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-photo-library';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhotoLibraryElement.is, IconBaselinePhotoLibraryElement);

export default IconBaselinePhotoLibraryElement;
