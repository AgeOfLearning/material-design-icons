import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGestureElement
 * @class IconTwotoneGestureElement
 * @extends {AoflElement}
 */
class IconTwotoneGestureElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGestureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-gesture';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGestureElement.is, IconTwotoneGestureElement);

export default IconTwotoneGestureElement;
