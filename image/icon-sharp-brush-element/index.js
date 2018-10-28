import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBrushElement
 * @class IconSharpBrushElement
 * @extends {AoflElement}
 */
class IconSharpBrushElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBrushElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-brush';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBrushElement.is, IconSharpBrushElement);

export default IconSharpBrushElement;
