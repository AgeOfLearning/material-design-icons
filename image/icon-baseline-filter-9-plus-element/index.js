import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilter9PlusElement
 * @class IconBaselineFilter9PlusElement
 * @extends {AoflElement}
 */
class IconBaselineFilter9PlusElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilter9PlusElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-9-plus';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilter9PlusElement.is, IconBaselineFilter9PlusElement);

export default IconBaselineFilter9PlusElement;
