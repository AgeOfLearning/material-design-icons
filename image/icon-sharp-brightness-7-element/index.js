import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBrightness7Element
 * @class IconSharpBrightness7Element
 * @extends {AoflElement}
 */
class IconSharpBrightness7Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBrightness7Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-brightness-7';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBrightness7Element.is, IconSharpBrightness7Element);

export default IconSharpBrightness7Element;
