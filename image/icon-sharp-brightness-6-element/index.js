import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBrightness6Element
 * @class IconSharpBrightness6Element
 * @extends {AoflElement}
 */
class IconSharpBrightness6Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBrightness6Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-brightness-6';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBrightness6Element.is, IconSharpBrightness6Element);

export default IconSharpBrightness6Element;
