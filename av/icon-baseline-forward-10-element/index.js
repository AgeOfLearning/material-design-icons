import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineForward10Element
 * @class IconBaselineForward10Element
 * @extends {AoflElement}
 */
class IconBaselineForward10Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineForward10Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-forward-10';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineForward10Element.is, IconBaselineForward10Element);

export default IconBaselineForward10Element;
