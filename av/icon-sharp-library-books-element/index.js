import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLibraryBooksElement
 * @class IconSharpLibraryBooksElement
 * @extends {AoflElement}
 */
class IconSharpLibraryBooksElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLibraryBooksElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-library-books';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLibraryBooksElement.is, IconSharpLibraryBooksElement);

export default IconSharpLibraryBooksElement;
