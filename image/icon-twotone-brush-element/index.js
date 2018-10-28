import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBrushElement
 * @class IconTwotoneBrushElement
 * @extends {AoflElement}
 */
class IconTwotoneBrushElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBrushElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-brush';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBrushElement.is, IconTwotoneBrushElement);

export default IconTwotoneBrushElement;
