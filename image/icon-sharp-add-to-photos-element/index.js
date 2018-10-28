import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAddToPhotosElement
 * @class IconSharpAddToPhotosElement
 * @extends {AoflElement}
 */
class IconSharpAddToPhotosElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAddToPhotosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-add-to-photos';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAddToPhotosElement.is, IconSharpAddToPhotosElement);

export default IconSharpAddToPhotosElement;
