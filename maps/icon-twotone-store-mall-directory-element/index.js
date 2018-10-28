import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStoreMallDirectoryElement
 * @class IconTwotoneStoreMallDirectoryElement
 * @extends {AoflElement}
 */
class IconTwotoneStoreMallDirectoryElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStoreMallDirectoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-store-mall-directory';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStoreMallDirectoryElement.is, IconTwotoneStoreMallDirectoryElement);

export default IconTwotoneStoreMallDirectoryElement;
