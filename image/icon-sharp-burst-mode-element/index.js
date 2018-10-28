import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBurstModeElement
 * @class IconSharpBurstModeElement
 * @extends {AoflElement}
 */
class IconSharpBurstModeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBurstModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-burst-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBurstModeElement.is, IconSharpBurstModeElement);

export default IconSharpBurstModeElement;
