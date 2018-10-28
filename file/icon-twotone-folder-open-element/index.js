import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFolderOpenElement
 * @class IconTwotoneFolderOpenElement
 * @extends {AoflElement}
 */
class IconTwotoneFolderOpenElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFolderOpenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-folder-open';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFolderOpenElement.is, IconTwotoneFolderOpenElement);

export default IconTwotoneFolderOpenElement;
