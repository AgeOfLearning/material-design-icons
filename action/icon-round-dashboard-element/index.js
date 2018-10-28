import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDashboardElement
 * @class IconRoundDashboardElement
 * @extends {AoflElement}
 */
class IconRoundDashboardElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDashboardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-dashboard';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDashboardElement.is, IconRoundDashboardElement);

export default IconRoundDashboardElement;
