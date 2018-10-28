import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDashboardElement
 * @class IconTwotoneDashboardElement
 * @extends {AoflElement}
 */
class IconTwotoneDashboardElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDashboardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-dashboard';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDashboardElement.is, IconTwotoneDashboardElement);

export default IconTwotoneDashboardElement;
