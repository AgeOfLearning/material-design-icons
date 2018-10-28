import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundReportOffElement
 * @class IconRoundReportOffElement
 * @extends {AoflElement}
 */
class IconRoundReportOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundReportOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-report-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundReportOffElement.is, IconRoundReportOffElement);

export default IconRoundReportOffElement;
