import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFolderSpecialElement
 * @class IconOutlineFolderSpecialElement
 * @extends {AoflElement}
 */
class IconOutlineFolderSpecialElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFolderSpecialElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-folder-special';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFolderSpecialElement.is, IconOutlineFolderSpecialElement);

export default IconOutlineFolderSpecialElement;
