import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHdrWeakElement
 * @class IconSharpHdrWeakElement
 * @extends {AoflElement}
 */
class IconSharpHdrWeakElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHdrWeakElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-hdr-weak';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHdrWeakElement.is, IconSharpHdrWeakElement);

export default IconSharpHdrWeakElement;
