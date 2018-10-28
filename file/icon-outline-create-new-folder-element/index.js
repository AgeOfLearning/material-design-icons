import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCreateNewFolderElement
 * @class IconOutlineCreateNewFolderElement
 * @extends {AoflElement}
 */
class IconOutlineCreateNewFolderElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCreateNewFolderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-create-new-folder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCreateNewFolderElement.is, IconOutlineCreateNewFolderElement);

export default IconOutlineCreateNewFolderElement;
