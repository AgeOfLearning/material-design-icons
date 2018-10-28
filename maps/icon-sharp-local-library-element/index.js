import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalLibraryElement
 * @class IconSharpLocalLibraryElement
 * @extends {AoflElement}
 */
class IconSharpLocalLibraryElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalLibraryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-library';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalLibraryElement.is, IconSharpLocalLibraryElement);

export default IconSharpLocalLibraryElement;
