import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFolderSpecialElement
 * @class IconSharpFolderSpecialElement
 * @extends {AoflElement}
 */
class IconSharpFolderSpecialElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFolderSpecialElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-folder-special';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFolderSpecialElement.is, IconSharpFolderSpecialElement);

export default IconSharpFolderSpecialElement;
