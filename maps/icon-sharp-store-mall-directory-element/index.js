import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStoreMallDirectoryElement
 * @class IconSharpStoreMallDirectoryElement
 * @extends {AoflElement}
 */
class IconSharpStoreMallDirectoryElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStoreMallDirectoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-store-mall-directory';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStoreMallDirectoryElement.is, IconSharpStoreMallDirectoryElement);

export default IconSharpStoreMallDirectoryElement;
