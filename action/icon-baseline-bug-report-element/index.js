import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBugReportElement
 * @class IconBaselineBugReportElement
 * @extends {AoflElement}
 */
class IconBaselineBugReportElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBugReportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-bug-report';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBugReportElement.is, IconBaselineBugReportElement);

export default IconBaselineBugReportElement;
