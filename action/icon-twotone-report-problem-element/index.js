import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneReportProblemElement
 * @class IconTwotoneReportProblemElement
 * @extends {AoflElement}
 */
class IconTwotoneReportProblemElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneReportProblemElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-report-problem';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneReportProblemElement.is, IconTwotoneReportProblemElement);

export default IconTwotoneReportProblemElement;
