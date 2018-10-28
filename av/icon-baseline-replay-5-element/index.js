import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineReplay5Element
 * @class IconBaselineReplay5Element
 * @extends {AoflElement}
 */
class IconBaselineReplay5Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineReplay5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-replay-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineReplay5Element.is, IconBaselineReplay5Element);

export default IconBaselineReplay5Element;
