import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineEvStationElement
 * @class IconOutlineEvStationElement
 * @extends {AoflElement}
 */
class IconOutlineEvStationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineEvStationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-ev-station';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineEvStationElement.is, IconOutlineEvStationElement);

export default IconOutlineEvStationElement;
