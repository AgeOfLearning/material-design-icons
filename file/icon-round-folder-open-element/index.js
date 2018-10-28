import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFolderOpenElement
 * @class IconRoundFolderOpenElement
 * @extends {AoflElement}
 */
class IconRoundFolderOpenElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFolderOpenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-folder-open';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFolderOpenElement.is, IconRoundFolderOpenElement);

export default IconRoundFolderOpenElement;
