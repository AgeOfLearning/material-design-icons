import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatShapesElement
 * @class IconTwotoneFormatShapesElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatShapesElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatShapesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-shapes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatShapesElement.is, IconTwotoneFormatShapesElement);

export default IconTwotoneFormatShapesElement;
