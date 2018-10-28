import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilterNoneElement
 * @class IconBaselineFilterNoneElement
 * @extends {AoflElement}
 */
class IconBaselineFilterNoneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilterNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilterNoneElement.is, IconBaselineFilterNoneElement);

export default IconBaselineFilterNoneElement;
