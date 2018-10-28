import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTimer3Element
 * @class IconBaselineTimer3Element
 * @extends {AoflElement}
 */
class IconBaselineTimer3Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineTimer3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-timer-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTimer3Element.is, IconBaselineTimer3Element);

export default IconBaselineTimer3Element;
