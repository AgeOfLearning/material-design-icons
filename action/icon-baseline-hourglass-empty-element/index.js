import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHourglassEmptyElement
 * @class IconBaselineHourglassEmptyElement
 * @extends {AoflElement}
 */
class IconBaselineHourglassEmptyElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHourglassEmptyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-hourglass-empty';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHourglassEmptyElement.is, IconBaselineHourglassEmptyElement);

export default IconBaselineHourglassEmptyElement;
