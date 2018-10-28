import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBrushElement
 * @class IconBaselineBrushElement
 * @extends {AoflElement}
 */
class IconBaselineBrushElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBrushElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-brush';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBrushElement.is, IconBaselineBrushElement);

export default IconBaselineBrushElement;
