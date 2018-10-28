import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFolderElement
 * @class IconOutlineFolderElement
 * @extends {AoflElement}
 */
class IconOutlineFolderElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFolderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-folder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFolderElement.is, IconOutlineFolderElement);

export default IconOutlineFolderElement;
