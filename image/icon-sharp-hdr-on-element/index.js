import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHdrOnElement
 * @class IconSharpHdrOnElement
 * @extends {AoflElement}
 */
class IconSharpHdrOnElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHdrOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-hdr-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHdrOnElement.is, IconSharpHdrOnElement);

export default IconSharpHdrOnElement;
