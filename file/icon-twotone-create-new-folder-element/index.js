import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCreateNewFolderElement
 * @class IconTwotoneCreateNewFolderElement
 * @extends {AoflElement}
 */
class IconTwotoneCreateNewFolderElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCreateNewFolderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-create-new-folder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCreateNewFolderElement.is, IconTwotoneCreateNewFolderElement);

export default IconTwotoneCreateNewFolderElement;
