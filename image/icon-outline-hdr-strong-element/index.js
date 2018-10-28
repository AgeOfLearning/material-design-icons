import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHdrStrongElement
 * @class IconOutlineHdrStrongElement
 * @extends {AoflElement}
 */
class IconOutlineHdrStrongElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHdrStrongElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-hdr-strong';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHdrStrongElement.is, IconOutlineHdrStrongElement);

export default IconOutlineHdrStrongElement;
