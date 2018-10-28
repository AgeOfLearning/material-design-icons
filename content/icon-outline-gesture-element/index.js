import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGestureElement
 * @class IconOutlineGestureElement
 * @extends {AoflElement}
 */
class IconOutlineGestureElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGestureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-gesture';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGestureElement.is, IconOutlineGestureElement);

export default IconOutlineGestureElement;
