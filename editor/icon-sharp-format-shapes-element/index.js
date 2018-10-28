import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatShapesElement
 * @class IconSharpFormatShapesElement
 * @extends {AoflElement}
 */
class IconSharpFormatShapesElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatShapesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-shapes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatShapesElement.is, IconSharpFormatShapesElement);

export default IconSharpFormatShapesElement;
