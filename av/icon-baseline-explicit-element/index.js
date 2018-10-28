import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineExplicitElement
 * @class IconBaselineExplicitElement
 * @extends {AoflElement}
 */
class IconBaselineExplicitElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineExplicitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-explicit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineExplicitElement.is, IconBaselineExplicitElement);

export default IconBaselineExplicitElement;
