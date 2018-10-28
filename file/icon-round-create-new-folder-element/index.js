import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCreateNewFolderElement
 * @class IconRoundCreateNewFolderElement
 * @extends {AoflElement}
 */
class IconRoundCreateNewFolderElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCreateNewFolderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-create-new-folder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCreateNewFolderElement.is, IconRoundCreateNewFolderElement);

export default IconRoundCreateNewFolderElement;
