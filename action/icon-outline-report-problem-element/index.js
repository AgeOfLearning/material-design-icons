import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineReportProblemElement
 * @class IconOutlineReportProblemElement
 * @extends {AoflElement}
 */
class IconOutlineReportProblemElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineReportProblemElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-report-problem';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineReportProblemElement.is, IconOutlineReportProblemElement);

export default IconOutlineReportProblemElement;
