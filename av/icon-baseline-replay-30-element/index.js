import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineReplay30Element
 * @class IconBaselineReplay30Element
 * @extends {AoflElement}
 */
class IconBaselineReplay30Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineReplay30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-replay-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineReplay30Element.is, IconBaselineReplay30Element);

export default IconBaselineReplay30Element;
