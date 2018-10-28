import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLibraryAddElement
 * @class IconSharpLibraryAddElement
 * @extends {AoflElement}
 */
class IconSharpLibraryAddElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLibraryAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-library-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLibraryAddElement.is, IconSharpLibraryAddElement);

export default IconSharpLibraryAddElement;
