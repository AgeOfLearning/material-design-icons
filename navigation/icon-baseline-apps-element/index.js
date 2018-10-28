import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAppsElement
 * @class IconBaselineAppsElement
 * @extends {AoflElement}
 */
class IconBaselineAppsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAppsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-apps';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAppsElement.is, IconBaselineAppsElement);

export default IconBaselineAppsElement;
