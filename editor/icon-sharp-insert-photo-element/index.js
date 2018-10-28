import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpInsertPhotoElement
 * @class IconSharpInsertPhotoElement
 * @extends {AoflElement}
 */
class IconSharpInsertPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpInsertPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-insert-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpInsertPhotoElement.is, IconSharpInsertPhotoElement);

export default IconSharpInsertPhotoElement;
