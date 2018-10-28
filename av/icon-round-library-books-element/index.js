import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLibraryBooksElement
 * @class IconRoundLibraryBooksElement
 * @extends {AoflElement}
 */
class IconRoundLibraryBooksElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLibraryBooksElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-library-books';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLibraryBooksElement.is, IconRoundLibraryBooksElement);

export default IconRoundLibraryBooksElement;
