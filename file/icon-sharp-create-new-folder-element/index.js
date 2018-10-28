import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCreateNewFolderElement
 * @class IconSharpCreateNewFolderElement
 * @extends {AoflElement}
 */
class IconSharpCreateNewFolderElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCreateNewFolderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-create-new-folder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCreateNewFolderElement.is, IconSharpCreateNewFolderElement);

export default IconSharpCreateNewFolderElement;
