import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDashboardElement
 * @class IconBaselineDashboardElement
 * @extends {AoflElement}
 */
class IconBaselineDashboardElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDashboardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-dashboard';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDashboardElement.is, IconBaselineDashboardElement);

export default IconBaselineDashboardElement;
