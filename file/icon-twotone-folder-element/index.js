import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFolderElement
 * @class IconTwotoneFolderElement
 * @extends {AoflElement}
 */
class IconTwotoneFolderElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFolderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-folder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFolderElement.is, IconTwotoneFolderElement);

export default IconTwotoneFolderElement;
