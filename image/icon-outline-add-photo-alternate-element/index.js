import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAddPhotoAlternateElement
 * @class IconOutlineAddPhotoAlternateElement
 * @extends {AoflElement}
 */
class IconOutlineAddPhotoAlternateElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAddPhotoAlternateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-add-photo-alternate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAddPhotoAlternateElement.is, IconOutlineAddPhotoAlternateElement);

export default IconOutlineAddPhotoAlternateElement;
