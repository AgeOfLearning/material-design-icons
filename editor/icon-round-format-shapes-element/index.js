import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFormatShapesElement
 * @class IconRoundFormatShapesElement
 * @extends {AoflElement}
 */
class IconRoundFormatShapesElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFormatShapesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-format-shapes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFormatShapesElement.is, IconRoundFormatShapesElement);

export default IconRoundFormatShapesElement;
