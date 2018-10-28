import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFolderSpecialElement
 * @class IconTwotoneFolderSpecialElement
 * @extends {AoflElement}
 */
class IconTwotoneFolderSpecialElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFolderSpecialElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-folder-special';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFolderSpecialElement.is, IconTwotoneFolderSpecialElement);

export default IconTwotoneFolderSpecialElement;
