import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineToggleOnElement
 * @class IconBaselineToggleOnElement
 * @extends {AoflElement}
 */
class IconBaselineToggleOnElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineToggleOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-toggle-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineToggleOnElement.is, IconBaselineToggleOnElement);

export default IconBaselineToggleOnElement;
