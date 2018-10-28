import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBugReportElement
 * @class IconRoundBugReportElement
 * @extends {AoflElement}
 */
class IconRoundBugReportElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBugReportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-bug-report';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBugReportElement.is, IconRoundBugReportElement);

export default IconRoundBugReportElement;
