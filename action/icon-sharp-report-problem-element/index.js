import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpReportProblemElement
 * @class IconSharpReportProblemElement
 * @extends {AoflElement}
 */
class IconSharpReportProblemElement extends AoflElement {
  /**
   * Creates an instance of IconSharpReportProblemElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-report-problem';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpReportProblemElement.is, IconSharpReportProblemElement);

export default IconSharpReportProblemElement;
