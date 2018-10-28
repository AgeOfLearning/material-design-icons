import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRouterElement
 * @class IconBaselineRouterElement
 * @extends {AoflElement}
 */
class IconBaselineRouterElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRouterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-router';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRouterElement.is, IconBaselineRouterElement);

export default IconBaselineRouterElement;
