import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineReportProblemElement
 * @class IconBaselineReportProblemElement
 * @extends {AoflElement}
 */
class IconBaselineReportProblemElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineReportProblemElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-report-problem';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineReportProblemElement.is, IconBaselineReportProblemElement);

export default IconBaselineReportProblemElement;
