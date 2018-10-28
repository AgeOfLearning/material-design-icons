import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneEvStationElement
 * @class IconTwotoneEvStationElement
 * @extends {AoflElement}
 */
class IconTwotoneEvStationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneEvStationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-ev-station';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneEvStationElement.is, IconTwotoneEvStationElement);

export default IconTwotoneEvStationElement;
