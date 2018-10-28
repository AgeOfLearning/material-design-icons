import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFileCopyElement
 * @class IconOutlineFileCopyElement
 * @extends {AoflElement}
 */
class IconOutlineFileCopyElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFileCopyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-file-copy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFileCopyElement.is, IconOutlineFileCopyElement);

export default IconOutlineFileCopyElement;
