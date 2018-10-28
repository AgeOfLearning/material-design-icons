import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineInsertPhotoElement
 * @class IconOutlineInsertPhotoElement
 * @extends {AoflElement}
 */
class IconOutlineInsertPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineInsertPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-insert-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineInsertPhotoElement.is, IconOutlineInsertPhotoElement);

export default IconOutlineInsertPhotoElement;
