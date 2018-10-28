import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFolderOpenElement
 * @class IconOutlineFolderOpenElement
 * @extends {AoflElement}
 */
class IconOutlineFolderOpenElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFolderOpenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-folder-open';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFolderOpenElement.is, IconOutlineFolderOpenElement);

export default IconOutlineFolderOpenElement;
