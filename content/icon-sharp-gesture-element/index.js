import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGestureElement
 * @class IconSharpGestureElement
 * @extends {AoflElement}
 */
class IconSharpGestureElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGestureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-gesture';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGestureElement.is, IconSharpGestureElement);

export default IconSharpGestureElement;
