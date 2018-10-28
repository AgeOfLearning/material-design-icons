import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFolderElement
 * @class IconRoundFolderElement
 * @extends {AoflElement}
 */
class IconRoundFolderElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFolderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-folder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFolderElement.is, IconRoundFolderElement);

export default IconRoundFolderElement;
