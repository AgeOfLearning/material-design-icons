import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFolderOpenElement
 * @class IconSharpFolderOpenElement
 * @extends {AoflElement}
 */
class IconSharpFolderOpenElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFolderOpenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-folder-open';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFolderOpenElement.is, IconSharpFolderOpenElement);

export default IconSharpFolderOpenElement;
