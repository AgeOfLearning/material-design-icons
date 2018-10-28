import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAddAPhotoElement
 * @class IconOutlineAddAPhotoElement
 * @extends {AoflElement}
 */
class IconOutlineAddAPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAddAPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-add-a-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAddAPhotoElement.is, IconOutlineAddAPhotoElement);

export default IconOutlineAddAPhotoElement;
