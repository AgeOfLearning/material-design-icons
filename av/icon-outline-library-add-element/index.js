import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLibraryAddElement
 * @class IconOutlineLibraryAddElement
 * @extends {AoflElement}
 */
class IconOutlineLibraryAddElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLibraryAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-library-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLibraryAddElement.is, IconOutlineLibraryAddElement);

export default IconOutlineLibraryAddElement;
