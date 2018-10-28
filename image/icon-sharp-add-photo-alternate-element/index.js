import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAddPhotoAlternateElement
 * @class IconSharpAddPhotoAlternateElement
 * @extends {AoflElement}
 */
class IconSharpAddPhotoAlternateElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAddPhotoAlternateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-add-photo-alternate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAddPhotoAlternateElement.is, IconSharpAddPhotoAlternateElement);

export default IconSharpAddPhotoAlternateElement;
