import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineReorderElement
 * @class IconBaselineReorderElement
 * @extends {AoflElement}
 */
class IconBaselineReorderElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineReorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-reorder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineReorderElement.is, IconBaselineReorderElement);

export default IconBaselineReorderElement;
