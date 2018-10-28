import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAddToPhotosElement
 * @class IconOutlineAddToPhotosElement
 * @extends {AoflElement}
 */
class IconOutlineAddToPhotosElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAddToPhotosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-add-to-photos';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAddToPhotosElement.is, IconOutlineAddToPhotosElement);

export default IconOutlineAddToPhotosElement;
