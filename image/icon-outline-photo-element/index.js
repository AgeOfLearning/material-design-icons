import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhotoElement
 * @class IconOutlinePhotoElement
 * @extends {AoflElement}
 */
class IconOutlinePhotoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhotoElement.is, IconOutlinePhotoElement);

export default IconOutlinePhotoElement;
