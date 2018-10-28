import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHourglassFullElement
 * @class IconTwotoneHourglassFullElement
 * @extends {AoflElement}
 */
class IconTwotoneHourglassFullElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHourglassFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-hourglass-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHourglassFullElement.is, IconTwotoneHourglassFullElement);

export default IconTwotoneHourglassFullElement;
