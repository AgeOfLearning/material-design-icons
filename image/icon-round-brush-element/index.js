import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBrushElement
 * @class IconRoundBrushElement
 * @extends {AoflElement}
 */
class IconRoundBrushElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBrushElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-brush';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBrushElement.is, IconRoundBrushElement);

export default IconRoundBrushElement;
