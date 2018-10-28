import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineReplay10Element
 * @class IconBaselineReplay10Element
 * @extends {AoflElement}
 */
class IconBaselineReplay10Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineReplay10Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-replay-10';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineReplay10Element.is, IconBaselineReplay10Element);

export default IconBaselineReplay10Element;
