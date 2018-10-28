import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFlareElement
 * @class IconSharpFlareElement
 * @extends {AoflElement}
 */
class IconSharpFlareElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFlareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-flare';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFlareElement.is, IconSharpFlareElement);

export default IconSharpFlareElement;
