import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHourglassEmptyElement
 * @class IconOutlineHourglassEmptyElement
 * @extends {AoflElement}
 */
class IconOutlineHourglassEmptyElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHourglassEmptyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-hourglass-empty';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHourglassEmptyElement.is, IconOutlineHourglassEmptyElement);

export default IconOutlineHourglassEmptyElement;
