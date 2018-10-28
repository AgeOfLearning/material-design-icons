import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatShapesElement
 * @class IconOutlineFormatShapesElement
 * @extends {AoflElement}
 */
class IconOutlineFormatShapesElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatShapesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-shapes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatShapesElement.is, IconOutlineFormatShapesElement);

export default IconOutlineFormatShapesElement;
