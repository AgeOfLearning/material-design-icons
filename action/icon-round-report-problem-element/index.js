import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundReportProblemElement
 * @class IconRoundReportProblemElement
 * @extends {AoflElement}
 */
class IconRoundReportProblemElement extends AoflElement {
  /**
   * Creates an instance of IconRoundReportProblemElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-report-problem';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundReportProblemElement.is, IconRoundReportProblemElement);

export default IconRoundReportProblemElement;
