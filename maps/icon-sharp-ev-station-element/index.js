import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpEvStationElement
 * @class IconSharpEvStationElement
 * @extends {AoflElement}
 */
class IconSharpEvStationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpEvStationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-ev-station';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpEvStationElement.is, IconSharpEvStationElement);

export default IconSharpEvStationElement;
