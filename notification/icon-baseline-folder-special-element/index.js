import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFolderSpecialElement
 * @class IconBaselineFolderSpecialElement
 * @extends {AoflElement}
 */
class IconBaselineFolderSpecialElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFolderSpecialElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-folder-special';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFolderSpecialElement.is, IconBaselineFolderSpecialElement);

export default IconBaselineFolderSpecialElement;
