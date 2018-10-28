import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineEvStationElement
 * @class IconBaselineEvStationElement
 * @extends {AoflElement}
 */
class IconBaselineEvStationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineEvStationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-ev-station';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineEvStationElement.is, IconBaselineEvStationElement);

export default IconBaselineEvStationElement;
