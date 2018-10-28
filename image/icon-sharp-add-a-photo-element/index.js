import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAddAPhotoElement
 * @class IconSharpAddAPhotoElement
 * @extends {AoflElement}
 */
class IconSharpAddAPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAddAPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-add-a-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAddAPhotoElement.is, IconSharpAddAPhotoElement);

export default IconSharpAddAPhotoElement;
