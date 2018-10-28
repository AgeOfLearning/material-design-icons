import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRowingElement
 * @class IconBaselineRowingElement
 * @extends {AoflElement}
 */
class IconBaselineRowingElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRowingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-rowing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRowingElement.is, IconBaselineRowingElement);

export default IconBaselineRowingElement;
