import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFolderSpecialElement
 * @class IconRoundFolderSpecialElement
 * @extends {AoflElement}
 */
class IconRoundFolderSpecialElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFolderSpecialElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-folder-special';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFolderSpecialElement.is, IconRoundFolderSpecialElement);

export default IconRoundFolderSpecialElement;
