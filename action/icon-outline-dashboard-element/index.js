import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDashboardElement
 * @class IconOutlineDashboardElement
 * @extends {AoflElement}
 */
class IconOutlineDashboardElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDashboardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-dashboard';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDashboardElement.is, IconOutlineDashboardElement);

export default IconOutlineDashboardElement;
