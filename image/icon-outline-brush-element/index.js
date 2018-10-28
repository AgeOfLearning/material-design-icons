import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBrushElement
 * @class IconOutlineBrushElement
 * @extends {AoflElement}
 */
class IconOutlineBrushElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBrushElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-brush';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBrushElement.is, IconOutlineBrushElement);

export default IconOutlineBrushElement;
