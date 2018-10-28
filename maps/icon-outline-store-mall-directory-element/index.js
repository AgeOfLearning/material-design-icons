import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStoreMallDirectoryElement
 * @class IconOutlineStoreMallDirectoryElement
 * @extends {AoflElement}
 */
class IconOutlineStoreMallDirectoryElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStoreMallDirectoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-store-mall-directory';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStoreMallDirectoryElement.is, IconOutlineStoreMallDirectoryElement);

export default IconOutlineStoreMallDirectoryElement;
