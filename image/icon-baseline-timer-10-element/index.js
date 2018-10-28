import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTimer10Element
 * @class IconBaselineTimer10Element
 * @extends {AoflElement}
 */
class IconBaselineTimer10Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineTimer10Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-timer-10';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTimer10Element.is, IconBaselineTimer10Element);

export default IconBaselineTimer10Element;
