import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFolderSharedElement
 * @class IconRoundFolderSharedElement
 * @extends {AoflElement}
 */
class IconRoundFolderSharedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFolderSharedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-folder-shared';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFolderSharedElement.is, IconRoundFolderSharedElement);

export default IconRoundFolderSharedElement;
