import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLibraryBooksElement
 * @class IconBaselineLibraryBooksElement
 * @extends {AoflElement}
 */
class IconBaselineLibraryBooksElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLibraryBooksElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-library-books';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLibraryBooksElement.is, IconBaselineLibraryBooksElement);

export default IconBaselineLibraryBooksElement;
