import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBrightness5Element
 * @class IconSharpBrightness5Element
 * @extends {AoflElement}
 */
class IconSharpBrightness5Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBrightness5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-brightness-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBrightness5Element.is, IconSharpBrightness5Element);

export default IconSharpBrightness5Element;
