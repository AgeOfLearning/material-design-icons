import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHdrStrongElement
 * @class IconTwotoneHdrStrongElement
 * @extends {AoflElement}
 */
class IconTwotoneHdrStrongElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHdrStrongElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-hdr-strong';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHdrStrongElement.is, IconTwotoneHdrStrongElement);

export default IconTwotoneHdrStrongElement;
