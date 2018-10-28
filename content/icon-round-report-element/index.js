import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundReportElement
 * @class IconRoundReportElement
 * @extends {AoflElement}
 */
class IconRoundReportElement extends AoflElement {
  /**
   * Creates an instance of IconRoundReportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-report';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundReportElement.is, IconRoundReportElement);

export default IconRoundReportElement;
