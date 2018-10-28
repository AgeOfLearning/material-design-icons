import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGestureElement
 * @class IconRoundGestureElement
 * @extends {AoflElement}
 */
class IconRoundGestureElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGestureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-gesture';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGestureElement.is, IconRoundGestureElement);

export default IconRoundGestureElement;
