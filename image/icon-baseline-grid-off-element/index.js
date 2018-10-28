import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGridOffElement
 * @class IconBaselineGridOffElement
 * @extends {AoflElement}
 */
class IconBaselineGridOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGridOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-grid-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGridOffElement.is, IconBaselineGridOffElement);

export default IconBaselineGridOffElement;
