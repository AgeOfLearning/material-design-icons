import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineReportOffElement
 * @class IconBaselineReportOffElement
 * @extends {AoflElement}
 */
class IconBaselineReportOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineReportOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-report-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineReportOffElement.is, IconBaselineReportOffElement);

export default IconBaselineReportOffElement;
