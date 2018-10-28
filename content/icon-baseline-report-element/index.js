import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineReportElement
 * @class IconBaselineReportElement
 * @extends {AoflElement}
 */
class IconBaselineReportElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineReportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-report';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineReportElement.is, IconBaselineReportElement);

export default IconBaselineReportElement;
