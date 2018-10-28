import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFolderSharedElement
 * @class IconTwotoneFolderSharedElement
 * @extends {AoflElement}
 */
class IconTwotoneFolderSharedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFolderSharedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-folder-shared';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFolderSharedElement.is, IconTwotoneFolderSharedElement);

export default IconTwotoneFolderSharedElement;
