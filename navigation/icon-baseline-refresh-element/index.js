import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRefreshElement
 * @class IconBaselineRefreshElement
 * @extends {AoflElement}
 */
class IconBaselineRefreshElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRefreshElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-refresh';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRefreshElement.is, IconBaselineRefreshElement);

export default IconBaselineRefreshElement;
