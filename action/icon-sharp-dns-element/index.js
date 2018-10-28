import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDnsElement
 * @class IconSharpDnsElement
 * @extends {AoflElement}
 */
class IconSharpDnsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDnsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-dns';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDnsElement.is, IconSharpDnsElement);

export default IconSharpDnsElement;
