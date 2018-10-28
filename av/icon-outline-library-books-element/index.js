import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLibraryBooksElement
 * @class IconOutlineLibraryBooksElement
 * @extends {AoflElement}
 */
class IconOutlineLibraryBooksElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLibraryBooksElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-library-books';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLibraryBooksElement.is, IconOutlineLibraryBooksElement);

export default IconOutlineLibraryBooksElement;
