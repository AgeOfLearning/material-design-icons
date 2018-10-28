import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLibraryBooksElement
 * @class IconTwotoneLibraryBooksElement
 * @extends {AoflElement}
 */
class IconTwotoneLibraryBooksElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLibraryBooksElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-library-books';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLibraryBooksElement.is, IconTwotoneLibraryBooksElement);

export default IconTwotoneLibraryBooksElement;
