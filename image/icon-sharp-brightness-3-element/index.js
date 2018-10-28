import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBrightness3Element
 * @class IconSharpBrightness3Element
 * @extends {AoflElement}
 */
class IconSharpBrightness3Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBrightness3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-brightness-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBrightness3Element.is, IconSharpBrightness3Element);

export default IconSharpBrightness3Element;
