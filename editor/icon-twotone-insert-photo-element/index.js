import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneInsertPhotoElement
 * @class IconTwotoneInsertPhotoElement
 * @extends {AoflElement}
 */
class IconTwotoneInsertPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneInsertPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-insert-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneInsertPhotoElement.is, IconTwotoneInsertPhotoElement);

export default IconTwotoneInsertPhotoElement;
