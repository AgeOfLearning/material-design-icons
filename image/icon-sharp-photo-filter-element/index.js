import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhotoFilterElement
 * @class IconSharpPhotoFilterElement
 * @extends {AoflElement}
 */
class IconSharpPhotoFilterElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhotoFilterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-photo-filter';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhotoFilterElement.is, IconSharpPhotoFilterElement);

export default IconSharpPhotoFilterElement;
