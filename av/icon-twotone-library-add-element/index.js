import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLibraryAddElement
 * @class IconTwotoneLibraryAddElement
 * @extends {AoflElement}
 */
class IconTwotoneLibraryAddElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLibraryAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-library-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLibraryAddElement.is, IconTwotoneLibraryAddElement);

export default IconTwotoneLibraryAddElement;
