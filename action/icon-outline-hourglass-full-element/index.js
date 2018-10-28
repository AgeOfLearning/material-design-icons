import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHourglassFullElement
 * @class IconOutlineHourglassFullElement
 * @extends {AoflElement}
 */
class IconOutlineHourglassFullElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHourglassFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-hourglass-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHourglassFullElement.is, IconOutlineHourglassFullElement);

export default IconOutlineHourglassFullElement;
