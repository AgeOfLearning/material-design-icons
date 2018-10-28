import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFolderSharedElement
 * @class IconOutlineFolderSharedElement
 * @extends {AoflElement}
 */
class IconOutlineFolderSharedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFolderSharedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-folder-shared';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFolderSharedElement.is, IconOutlineFolderSharedElement);

export default IconOutlineFolderSharedElement;
