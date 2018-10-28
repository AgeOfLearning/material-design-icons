import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBrightness2Element
 * @class IconSharpBrightness2Element
 * @extends {AoflElement}
 */
class IconSharpBrightness2Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBrightness2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-brightness-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBrightness2Element.is, IconSharpBrightness2Element);

export default IconSharpBrightness2Element;
