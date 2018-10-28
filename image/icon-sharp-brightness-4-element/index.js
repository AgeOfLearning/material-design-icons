import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBrightness4Element
 * @class IconSharpBrightness4Element
 * @extends {AoflElement}
 */
class IconSharpBrightness4Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBrightness4Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-brightness-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBrightness4Element.is, IconSharpBrightness4Element);

export default IconSharpBrightness4Element;
