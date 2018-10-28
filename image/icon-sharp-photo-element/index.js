import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhotoElement
 * @class IconSharpPhotoElement
 * @extends {AoflElement}
 */
class IconSharpPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhotoElement.is, IconSharpPhotoElement);

export default IconSharpPhotoElement;
