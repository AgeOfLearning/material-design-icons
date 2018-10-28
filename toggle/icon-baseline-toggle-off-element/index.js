import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineToggleOffElement
 * @class IconBaselineToggleOffElement
 * @extends {AoflElement}
 */
class IconBaselineToggleOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineToggleOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-toggle-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineToggleOffElement.is, IconBaselineToggleOffElement);

export default IconBaselineToggleOffElement;
