import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWidgetsElement
 * @class IconBaselineWidgetsElement
 * @extends {AoflElement}
 */
class IconBaselineWidgetsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWidgetsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-widgets';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWidgetsElement.is, IconBaselineWidgetsElement);

export default IconBaselineWidgetsElement;
