import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFolderElement
 * @class IconSharpFolderElement
 * @extends {AoflElement}
 */
class IconSharpFolderElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFolderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-folder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFolderElement.is, IconSharpFolderElement);

export default IconSharpFolderElement;
