import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBrightness1Element
 * @class IconSharpBrightness1Element
 * @extends {AoflElement}
 */
class IconSharpBrightness1Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBrightness1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-brightness-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBrightness1Element.is, IconSharpBrightness1Element);

export default IconSharpBrightness1Element;
