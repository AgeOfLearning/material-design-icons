import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHourglassFullElement
 * @class IconBaselineHourglassFullElement
 * @extends {AoflElement}
 */
class IconBaselineHourglassFullElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHourglassFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-hourglass-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHourglassFullElement.is, IconBaselineHourglassFullElement);

export default IconBaselineHourglassFullElement;
