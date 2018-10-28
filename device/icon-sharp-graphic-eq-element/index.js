import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGraphicEqElement
 * @class IconSharpGraphicEqElement
 * @extends {AoflElement}
 */
class IconSharpGraphicEqElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGraphicEqElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-graphic-eq';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGraphicEqElement.is, IconSharpGraphicEqElement);

export default IconSharpGraphicEqElement;
