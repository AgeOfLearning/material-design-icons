import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHourglassEmptyElement
 * @class IconTwotoneHourglassEmptyElement
 * @extends {AoflElement}
 */
class IconTwotoneHourglassEmptyElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHourglassEmptyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-hourglass-empty';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHourglassEmptyElement.is, IconTwotoneHourglassEmptyElement);

export default IconTwotoneHourglassEmptyElement;
