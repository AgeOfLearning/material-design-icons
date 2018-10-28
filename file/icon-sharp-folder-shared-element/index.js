import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFolderSharedElement
 * @class IconSharpFolderSharedElement
 * @extends {AoflElement}
 */
class IconSharpFolderSharedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFolderSharedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-folder-shared';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFolderSharedElement.is, IconSharpFolderSharedElement);

export default IconSharpFolderSharedElement;
