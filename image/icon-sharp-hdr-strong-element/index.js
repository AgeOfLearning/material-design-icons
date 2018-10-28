import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHdrStrongElement
 * @class IconSharpHdrStrongElement
 * @extends {AoflElement}
 */
class IconSharpHdrStrongElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHdrStrongElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-hdr-strong';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHdrStrongElement.is, IconSharpHdrStrongElement);

export default IconSharpHdrStrongElement;
