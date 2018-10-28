import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatShapesElement
 * @class IconBaselineFormatShapesElement
 * @extends {AoflElement}
 */
class IconBaselineFormatShapesElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatShapesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-shapes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatShapesElement.is, IconBaselineFormatShapesElement);

export default IconBaselineFormatShapesElement;
